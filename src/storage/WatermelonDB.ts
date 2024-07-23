import { Database, Q } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { singleCommand } from './CommandSource';
import { WatermelonCommand } from './WatermelonCommand';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const TABLE_NAME = 'Commands';


// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema: WatermelonCommand.schema,
});

const database = new Database({
  adapter: adapter,
  modelClasses: [WatermelonCommand],
});

let deleted = false;


async function createCommand(): Promise<void> {
  return database.write(async () => {
    if(!deleted) {
      console.log("Are we clearing DB??")
      deleted = true
      await database.unsafeResetDatabase()
    }

    // console.log("Is this happening??")
    try {
      const newCommand = await database.get<WatermelonCommand>(TABLE_NAME).create(command => {
        command.docId = uuidv4(),
        command.actionType = singleCommand.type,
        command.revisionId = singleCommand.revisionId
      });

    } catch (e) {
      console.error('WatermelonDB: Failed to set value!', e);
    }
  });
}


export async function getFromWatermelonDB(): Promise<WatermelonCommand[]> {
  await createCommand();
  const commands: WatermelonCommand[] = await database.get<WatermelonCommand>(TABLE_NAME).query(
    Q.where('action_type', singleCommand.type)
  );
  // console.log(JSON.stringify(commands.length));
  return commands;
}

export { TABLE_NAME }
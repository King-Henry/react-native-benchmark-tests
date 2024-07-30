import Realm, { CanonicalObjectSchema, ObjectSchema } from 'realm';
import { Command } from './RealmCommand';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import { CommandPayload, singleCommand } from './CommandSource';

const realm = new Realm({
  schema: [Command.schema],
});

let deleted = false

function createAndSaveCommand() {
  realm.write(() => {
    if(!deleted) {
      deleted = true
      realm.deleteAll()
    }

    realm.create('Command', {
      actionType: singleCommand.type,
      _id: uuidv4(),
      revisionId: singleCommand.revisionId
    })
  })
}

// realm.write(() => {
//   for(let i = 0; i < 1000; i++) {
//     realm.create('Command', {
//       actionType: "action-update-schedule",
//       id: uuidv4(),
//       revisionId: "2-gs4a6sdfg4gdsh46hds46gdhst"
//     })
//   }
// });

// function createCommands(): any[] {
//   const list = []
//   for(let j = 0; j < 1000; j++) {
//     list.push({
//       actionType: "action-update-schedule",
//       id: uuidv4(),
//       revisionId: "2-gs4a6sdfg4gdsh46hds46gdhst"
//     })
//   }
//   return list
// }

// realm.write(() => {
//   realm.deleteAll();
//   realm.create('CommandsForEntity', {
//     _id: "random-id",
//     commands: createCommands()
//   })
// })



export function getFromRealm(): Command[] {
  createAndSaveCommand()
  let filteredCommands: Command[] = realm.objects<Command>('Command')
          .filter( (command: Command) => command.actionType === singleCommand.type)
  // console.log(JSON.stringify(filteredCommands));
  return filteredCommands
}

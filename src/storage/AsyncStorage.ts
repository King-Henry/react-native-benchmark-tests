import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommandPayload, singleCommand, key } from './CommandSource';


AsyncStorage.clear();

// Grab current CommandPayload array, add a new command to it, save.
export async function getFromAsyncStorage(): Promise<CommandPayload[]> {
  let rawCommands: string | null = await AsyncStorage.getItem(key);

  let commands = rawCommands !== null ? JSON.parse(rawCommands) as CommandPayload[]
    : []
  commands.push(singleCommand)
  AsyncStorage.setItem(key, JSON.stringify(commands));
  // console.log(JSON.stringify(commands));
 return commands
}

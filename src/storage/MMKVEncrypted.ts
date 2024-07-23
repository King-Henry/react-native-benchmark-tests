import {MMKV} from 'react-native-mmkv';
import { key, CommandPayload, singleCommand } from './CommandSource';

const storage = new MMKV({
  id: 'encrypted-mmkv-storage',
  encryptionKey: 'hunter2',
});

storage.clearAll();

export function getFromMMKVEncrypted(): CommandPayload[] {
  // console.log(`Key: ${key}`)
  let rawCommands: string | undefined = storage.getString(key);
  // console.log(`Before ${rawCommands}`);
  let parsedCommands: CommandPayload[] = rawCommands === undefined ? [] 
    : JSON.parse(rawCommands)
  parsedCommands.push(singleCommand)
  let stringified =  JSON.stringify(parsedCommands)
  // console.log(`After ${stringified}`);
  storage.set(key, stringified)
  return parsedCommands
}

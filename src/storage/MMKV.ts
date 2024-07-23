import { column } from '@nozbe/watermelondb/QueryDescription';
import { MMKV } from 'react-native-mmkv';
import { CommandPayload, singleCommand, key } from './CommandSource';

const storage = new MMKV();

storage.clearAll();

export function getFromMMKV(): CommandPayload[] {
  let rawCommands: string | undefined = storage.getString(key);
  let parsedCommands: CommandPayload[] = rawCommands === undefined ? [] 
    : JSON.parse(rawCommands)
  parsedCommands.push(singleCommand)
  // console.log(JSON.stringify(parsedCommands))
  // console.log(parsedCommands.length)
  storage.set(key, JSON.stringify(parsedCommands))
  // console.log(JSON.stringify(parsedCommands));
  return parsedCommands
}

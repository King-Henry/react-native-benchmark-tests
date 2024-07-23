import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
import { CommandPayload, key, singleCommand } from './CommandSource';

const storage = new MMKVLoader().withEncryption().initialize()
storage.clearStore()
storage.clearMemoryCache()

export function getFromReactNativeMMKVStorageEncryption(): CommandPayload[] {
    let rawCommands: string = storage.getString(key)
    let parsedCommands: CommandPayload[] = (rawCommands === null || rawCommands === undefined) ? [] 
        : JSON.parse(rawCommands) as CommandPayload[]
    parsedCommands.push(singleCommand)
    storage.setString(key, JSON.stringify(parsedCommands))
    // console.log(JSON.stringify(parsedCommands));
    return parsedCommands
}


import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
import { CommandPayload, singleCommand, key } from './CommandSource';

const storage = new MMKVLoader().initialize()
storage.clearStore()
storage.clearMemoryCache()

export function getFromReactNativeMMKVStorage(): CommandPayload[] {
    let rawCommands: string = storage.getString(key)
    let parsedCommands = (rawCommands === null || rawCommands == undefined) ? [] 
        : JSON.parse(rawCommands) as CommandPayload[]
    parsedCommands.push(singleCommand)
    storage.setString(key, JSON.stringify(parsedCommands))
    // console.log(JSON.stringify(parsedCommands));
    return parsedCommands
}



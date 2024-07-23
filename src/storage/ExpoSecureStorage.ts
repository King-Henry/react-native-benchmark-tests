import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store';
import { CommandPayload, singleCommand, key } from './CommandSource';

deleteItemAsync(key)

export async function getFromExpoSecureStorage(): Promise<CommandPayload[]> {
    let rawCommands = await getItemAsync(key)
    let parsedCommands: CommandPayload[] = rawCommands !== null ? JSON.parse(rawCommands)
        : []
    parsedCommands.push(singleCommand)
    setItemAsync(key, JSON.stringify(parsedCommands))
    // console.log(JSON.stringify(parsedCommands));
    return parsedCommands
}

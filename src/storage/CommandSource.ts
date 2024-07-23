import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

interface CommandPayload {
    type: string,
    id: string,
    revisionId: string
}

const singleCommand: CommandPayload = {
    type: "action-update-schedule",
    id: "dsfkjhriyrwoueioqoriwgojsr12455gfsnjksfg",
    revisionId: "2-gs4a6sdfg4gdsh46hds46gdhst"
}

const key = uuidv4()

function getAllCommands() {
    const list = []
    for(let i = 0; i < 100; i++) {
        list.push(singleCommand)
    }
    return list
} 
let commands = getAllCommands()

export { singleCommand }
export { key }
export type { CommandPayload }

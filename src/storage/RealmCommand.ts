import { List, ObjectSchema } from "realm";
import { Realm } from "realm";


export class Command extends Realm.Object<Command> {
    id!: string;
    revisionId!: string;
    actionType!: string
  
    static schema: ObjectSchema = {
      name: 'Command',
      primaryKey: '_id',
      properties: {
        _id: 'string',
        revisionId: 'string',
        actionType: 'string'
      }
    }
  }

  // export class CommandsForEntity extends Realm.Object<CommandsForEntity> {
  //   _id!: string;
  //   commands!: Realm.List<Command>

  //   static schema: ObjectSchema = {
  //     name: 'CommandsForEntity',
  //     primaryKey: '_id',
  //     properties: {
  //       _id: 'string',
  //       commands: {
  //         type: 'list',
  //         objectType: 'Command'
  //       }
  //     }
  //   }

  // }
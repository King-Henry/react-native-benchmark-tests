import { Model, appSchema, tableSchema } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

const TABLE_NAME = 'Commands'

class WatermelonCommand extends Model {
    static table = TABLE_NAME;
  
    @field('action_type') actionType: string
    @field('revision_id') revisionId: string
    @field('doc_id') docId: string

    static schema = appSchema({
        version: 1,
        tables: [
          tableSchema({
            name: TABLE_NAME,
            columns: [
              { name: 'doc_id', type: 'string' },
              { name: 'action_type', type: 'string' },
              { name: 'revision_id', type: 'string' }
            ],
          }),
        ],
      });
  }

  export { WatermelonCommand }
  
  
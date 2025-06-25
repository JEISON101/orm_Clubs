import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'demarcaciones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_dem')
      table.string('demarcacion')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
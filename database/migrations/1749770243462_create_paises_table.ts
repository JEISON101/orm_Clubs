import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'paises'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_pais')
      
      table.string('nombre_pais', 30)
      table.string('comunitario')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
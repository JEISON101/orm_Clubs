import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'entrenadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_entren')
      table.string('entrenador')
      table.date('fecha_ncmto')
      table.string('poblacion')
      table.string('provincia')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
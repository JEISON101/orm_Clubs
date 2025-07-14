import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estadios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodEstadio')
      table.string('estadio')
      table.string('direccion')
      table.integer('codPostal')
      table.string('poblacion')
      table.string('provincia')
      table.integer('capacidad')
      table.integer('sentados')
      table.date('inauguracion')
      table.string('dimensiones')
      table.integer('CodClub').unsigned().references('CodClub').inTable('clubes')
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
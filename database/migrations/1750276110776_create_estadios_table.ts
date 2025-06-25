import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estadios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_estadio')

      table.string('estadio').notNullable()
      table.string('direccion').notNullable()
      table.string('cod_postal')
      table.string('poblacion')
      table.string('provincia')
      table.string('capacidad')
      table.string('sentados')
      table.date('inaguracion')
      table.string('dimensiones')
      table.integer('cod_club').references('cod_club').inTable('clubs').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')   
    })
  }
  
  async down() {
    this.schema.dropTable(this.tableName)
  }
}
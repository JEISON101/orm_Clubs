import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jugadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodJugador')
      table.string('club')
      table.string('jugador')
      table.string('dorsal')
      table.integer('CodPais').notNullable().references('CodPais').inTable('paises').onDelete('CASCADE')
      table.integer('CodDem').notNullable().references('CodDem').inTable('demarcacions').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jugadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_jugador')

      table.string('club')
      table.string('jugador')
      table.string('dorsal')
      table.integer('cod_pais').notNullable().references('cod_pais').inTable('paises').onDelete('CASCADE')
      table.integer('cod_dem').notNullable().references('cod_dem').inTable('demarcaciones').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'club_jugadors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('CodClub')
        .unsigned()
        .references('CodClub')
        .inTable('clubes')
        .onDelete('CASCADE')
      table.integer('CodJugador')
        .unsigned()
        .references('CodJugador')
        .inTable('jugadores')
        .onDelete('CASCADE')
      table.unique(['CodClub','CodJugador'])
      table.string('liga')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
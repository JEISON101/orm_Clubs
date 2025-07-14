import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'palmares'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('CodClub')
        .unsigned()
        .references('CodClub')
        .inTable('clubes')
        .onDelete('CASCADE')
      table.integer('CodTrofeo')
        .unsigned()
        .references('CodTrofeo')
        .inTable('campeonatoes')
        .onDelete('CASCADE')
      table.unique(['CodClub', 'CodTrofeo'])
      table.integer('anio')


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
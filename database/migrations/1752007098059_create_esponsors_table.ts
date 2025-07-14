import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'esponsors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodEspon')
      table.string('esponsor')
      table.integer('CodClub').unsigned().references('CodClub').inTable('clubes')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
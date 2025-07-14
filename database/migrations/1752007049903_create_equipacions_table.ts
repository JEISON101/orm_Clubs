import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'equipacions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodEquip')
      table.string('enCasa')
      table.integer('CodClub').notNullable().references('CodClub').inTable('clubes').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
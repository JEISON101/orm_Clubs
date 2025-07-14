import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'entren_clubes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('CodClub').unsigned().references('CodClub').inTable('clubes')
      table.integer('CodEntren').unsigned().references('CodEntren').inTable('entrenadores')
      table.unique(['CodClub', 'CodEntren'])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

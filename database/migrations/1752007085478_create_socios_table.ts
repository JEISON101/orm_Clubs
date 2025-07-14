import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'socios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodSocio')
      table.integer('codPost')
      table.string('nombre')
      table.string('apellidos')
      table.string('direccion')
      table.string('provincia')
      table.date('fechaAlta')
      table.integer('cuotaActual')
      table.integer('CodClub').unsigned().references('CodClub').inTable('clubes')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
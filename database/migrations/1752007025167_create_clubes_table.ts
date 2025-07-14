import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clubes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodClub')
      table.string('club')
      table.string('nombre')
      table.string('direccion')
      table.string('poblacion')
      table.string('codPostal')
      table.string('tlfno')
      table.string('colores')
      table.string('himno')
      table.string('fax')
      table.integer('anioFundacion')
      table.decimal('presupuesto', 10, 2)
      table.string('presidente')
      table.string('vicepresidente')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

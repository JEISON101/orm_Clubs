import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import EntrenClube from './entren_clube.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Entrenadore extends BaseModel {
  @column({ isPrimary: true, columnName: 'CodEntren' })
  declare CodEntren: number

  @column({ columnName: 'entrenador' })
  declare entrenador: string

  @column({ columnName: 'fechaNacimiento' })
  declare fechaNacimiento: Date

  @column({ columnName: 'poblacion' })
  declare poblacion: number

  @column({ columnName: 'provincia' })
  declare provincia: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=> EntrenClube)
  declare entrenclubes: HasMany<typeof EntrenClube>
}

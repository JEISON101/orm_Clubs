import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Palmare from './palmare.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Campeonato extends BaseModel {
  @column({ isPrimary: true, columnName: "CodTrofeo" })
  declare CodTrofeo: number

  @column({columnName:"nombreTrofeo"})
  declare nombreTrofeo: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=> Palmare)
  declare palmares: HasMany<typeof Palmare>
}
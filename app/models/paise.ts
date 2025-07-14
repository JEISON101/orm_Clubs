import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Jugadore from './jugadore.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Paise extends BaseModel {
  @column({ isPrimary: true, columnName:"CodPais" })
  declare CodPais: number


  @column({columnName:"nombrePais"})
  declare nombrePais:string

  @column({columnName:"comunitario"})
  declare comunitario: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() =>Jugadore)
  declare jugadores: HasMany<typeof Jugadore>
}
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Jugador from './jugador.js'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Demarcacion extends BaseModel {
  @column({ isPrimary: true })
  declare cod_dem: number

  @column() declare demarcacion:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=> Jugador, {foreignKey:'cod_dem'})
  declare jugadores: relations.HasMany<typeof Jugador>
}
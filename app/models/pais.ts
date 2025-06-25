import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Jugador from './jugador.js'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Pais extends BaseModel {
  @column({ isPrimary: true })
  declare cod_pais: number

  @column() declare nombre_pais:string

  @column() declare comunitario:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=> Jugador, {foreignKey:'cod_pais'})
  declare jugadores: relations.HasMany<typeof Jugador>
}
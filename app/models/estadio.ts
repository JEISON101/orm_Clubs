import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Clube from './clube.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Estadio extends BaseModel {
  @column({ isPrimary: true, columnName:"CodEstadio" })
  declare CodEstadio: number

  @column({}) declare estadio: string
  @column({}) declare direccion: string
  @column({columnName:"codPostal"}) declare codPostal: number
  @column({}) declare poblacion: number
  @column({}) declare provincia: string
  @column({}) declare capacidad: number
  @column({}) declare sentados: number
  @column({}) declare inauguracion: Date
  @column({}) declare dimensiones: string
  @column({columnName:"CodClub"}) declare CodClub: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Clube)
  declare clubes: BelongsTo<typeof Clube>
}
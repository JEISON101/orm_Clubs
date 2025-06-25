import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Estadio extends BaseModel {
  @column({ isPrimary: true })
  declare cod_estadio: number
  
  @column()
  declare estadio: string
  
  @column()
  declare direccion: string
  
  @column()
  declare cod_postal: string
  
  @column()
  declare poblacion: string

  @column()
  declare provincia: string

  @column()
  declare capacidad: string

  @column()
  declare sentados: string

  @column.date()
  declare inaguracion: DateTime

  @column()
  declare dimensiones: string

  @column()
  declare cod_club: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Estadio)
  declare estadios: relations.HasMany<typeof Estadio>
}
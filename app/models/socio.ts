import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Clube from './clube.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Socio extends BaseModel {
  @column({ isPrimary: true, columnName: 'CodSocio' })
  declare CodSocio: number

  @column({ columnName: 'codPost' })
  declare codPost: string

  @column({}) declare nombre: string
  @column({}) declare apellidos: string
  @column({}) declare direccion: string
  @column({}) declare provincia: string
  @column({ columnName: 'fechaAlta' }) declare fechaAlta: Date
  @column({ columnName: 'cuotaActual' }) declare cuotaActual: number
  @column({ columnName: 'CodClub' }) declare CodClub: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Clube)
  declare clubes:BelongsTo<typeof Clube>
}

import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Clube from './clube.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Esponsor extends BaseModel {
  @column({ isPrimary: true, columnName:"CodEspon" })
  declare CodEspon: number

  @column({}) declare esponsor: string

  @column({columnName:"CodClub"})
  declare CodClub: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Clube)
  declare clubes: BelongsTo<typeof Clube>
}
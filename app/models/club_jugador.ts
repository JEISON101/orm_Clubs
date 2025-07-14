import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Clube from './clube.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Jugadore from './jugadore.js'

export default class ClubJugador extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({columnName:"CodClub"})
  declare CodClub: number

  @column({columnName:"CodJugador"})
  declare CodJugador: number

  @column()
  declare liga: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Clube)
  declare clubes: BelongsTo<typeof Clube>

  @belongsTo(()=> Jugadore)
  declare jugadores: BelongsTo<typeof Jugadore>
}
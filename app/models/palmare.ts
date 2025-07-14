import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Clube from './clube.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Campeonato from './campeonato.js'

export default class Palmare extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({columnName:"CodClub"})
  declare CodClub: number

  @column({columnName:"CodTrofeo"})
  declare CodTrofeo: number

  @column()
  declare anio: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Clube, {
    foreignKey: 'CodTrofeo',
  })
  declare clubes: BelongsTo<typeof Clube>

  @belongsTo(() => Campeonato, { foreignKey: 'CodTrofeo' })
  declare campeonatos: BelongsTo<typeof Campeonato>
}

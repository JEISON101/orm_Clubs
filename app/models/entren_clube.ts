import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Clube from './clube.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Entrenadore from './entrenadore.js'

export default class EntrenClube extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({columnName:"CodClub"})
  declare CodClub: number
  
  @column({columnName:"CodEntren"})
  declare CodEntren: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Clube, {
      foreignKey: 'CodTrofeo',
    })
    declare clubes: BelongsTo<typeof Clube>

  @belongsTo(() => Entrenadore, {
      foreignKey: 'CodEntren',
    })
    declare entrenadores: BelongsTo<typeof Entrenadore>
}
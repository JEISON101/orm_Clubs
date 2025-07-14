import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Paise from './paise.js'
import type { BelongsTo, HasMany} from '@adonisjs/lucid/types/relations'
import ClubJugador from './club_jugador.js'

export default class Jugadore extends BaseModel {
  @column({ isPrimary: true, columnName:"CodJugador" })
  declare CodJugador: number

  @column({})
  declare club:string

  @column({})
  declare jugador:string

  @column({})
  declare dorsal:string

  @column({columnName:"CodPais"})
  declare CodPais:number

  @column({columnName:"CodDem"})
  declare CodDem:number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Paise)
  declare paises: BelongsTo<typeof Paise>

  @hasMany(() => ClubJugador)
    declare clubjugadores: HasMany<typeof ClubJugador>
}
import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Pais from './pais.js'
import * as relations from '@adonisjs/lucid/types/relations'
import Demarcacion from './demarcacion.js'

export default class Jugador extends BaseModel {
  @column({ isPrimary: true })
  declare cod_jugador: number

  @column() declare club: string
  @column() declare jugador: string
  @column() declare dorsal: string
  @column() declare cod_pais: number
  @column() declare cod_dem: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Pais, { foreignKey: 'cod_pais' })
  declare paises: relations.BelongsTo<typeof Pais>;

  @belongsTo(() => Demarcacion, { foreignKey: 'cod_dem' })
  declare demarcaciones: relations.BelongsTo<typeof Demarcacion>;

}
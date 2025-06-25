import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Campeonato extends BaseModel {
  @column({ isPrimary: true })
  declare cod_trofeo: number

  @column() declare nombre_trofeo:string 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
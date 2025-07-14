import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Demarcacion extends BaseModel {
  @column({ isPrimary: true, columnName: "CodDem" })
  declare CodDem: number

  @column({columnName: "demarcacion"})
  declare demarcacion: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
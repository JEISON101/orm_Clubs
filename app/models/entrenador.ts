import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Entrenador extends BaseModel {
  @column({ isPrimary: true })
  declare cod_entren: number

  @column() declare entrenador:string
  @column() declare fecha_ncmto:Date
  @column() declare poblacion:string
  @column() declare provincia:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
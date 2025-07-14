import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Equipacion from './equipacion.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Palmare from './palmare.js'
import ClubJugador from './club_jugador.js'
import Socio from './socio.js'
import Esponsor from './esponsor.js'
import Estadio from './estadio.js'
import EntrenClube from './entren_clube.js'

export default class Clube extends BaseModel {
  @column({ isPrimary: true, columnName:"CodClub" })
  declare CodClub: number

  @column({})
  declare club: string

  @column({})
  declare nombre: string

  @column({})
  declare direccion: string

  @column({})
  declare poblacion: string

  @column({columnName:"codPostal"})
  declare codPostal: string

  @column({})
  declare tlfno: string

  @column({})
  declare colores: string

  @column({})
  declare himno: string

  @column({})
  declare fax: string

  @column({columnName:"anioFundacion"})
  declare anioFundacion: number

  @column({})
  declare presupuesto: number

  @column({})
  declare presidente:string

  @column({})
  declare vicepresidente:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=> Equipacion)
  declare equpacion: HasMany<typeof Equipacion>

  @hasMany(() => Palmare)
  declare palmares: HasMany<typeof Palmare>

  @hasMany(() => ClubJugador)
  declare clubjugadores: HasMany<typeof ClubJugador>

  @hasMany(()=> Socio)
  declare socios:  HasMany<typeof Socio>

  @hasMany(()=> Esponsor)
  declare esponsor: HasMany<typeof Esponsor>

  @hasMany(()=> Estadio)
  declare estadios: HasMany<typeof Estadio>

  @hasMany(()=> EntrenClube)
    declare entrenclubes: HasMany<typeof EntrenClube>
}
//Información Campeonato:
export interface InfoCampeonato {
  nombreTrofeo: string
}

//Información Demarcación:
export interface InfoDemarcacion {
  demarcacion: string
}

//Información Entrenadores:
export interface InfoEntrenadores {
  entrenador: string
  fechaNacimiento: Date
  poblacion: number
  provincia: string
}

//Información Paises:
export interface InfoPaises {
  nombrePais: string
  comunitario: string
}

//Informacion Clubes:
export interface InfoClubes {
  club: string
  nombre: string
  direccion: string
  poblacion: string
  codPostal: string
  tlfno: string
  colores: string
  himno: string
  fax: string
  anioFundacion: number
  presidente: string
  vicepresidente: string
}

//Información Jugadores:
export interface InfoJugadores {
  club: string
  jugador: string
  dorsal: string
  CodPais: number
  CodDem: number
}

//Información Equipación:
export interface InfoEquipacion {
  enCasa: string
  CodClub: number
}

//Información Esponsor:
export interface InfoEsponsor {
  esponsor: string
  CodClub: number
}

//Información Socios:
export interface InfoSocios {
  codPost: string
  nombre: string
  apellidos: string
  direccion: string
  provincia: string
  fechaAlta: Date
  cuotaActual: number
  CodClub: number
}

//Información Palmares:

export interface InfoPalmares {
  CodClub: number
  CodTrofeo: number
  anio: number
}

//Información ClubJugadores:

export interface InfoClubJugador {
  CodClub: number
  CodJugador: number
  liga: string
}

import JugadoresServices from '#services/JugadoresServices'
import { HttpContext } from '@adonisjs/core/http'
import { InfoJugadores } from '../interfaces/interfacesServices.js'

const jugadorN = new JugadoresServices()

export default class JugadoresController {
  async createJugador({ request, response }: HttpContext) {
    try {
      const { club, jugador, dorsal, CodPais, CodDem } = request.body()
      const data: InfoJugadores = { club, jugador, dorsal, CodPais, CodDem }
      const jugadorNew = await jugadorN.create(data)
      return response.status(201).json({ msj: 'Jugador creado', data: jugadorNew })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al crear el registro' })
    }
  }
  async readJugadores({ response }: HttpContext) {
    try {
      const jugadores = await jugadorN.read()
      return response.status(200).json({ msj: 'Información obtenida.', data: jugadores })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al crear el registro' })
    }
  }
  async deleteJugador({ params, response }: HttpContext) {
    try {
        const {id} = params;
        await jugadorN.delete(id);
      return response.status(200).json({ msj: 'registro eliminado.'})
    } catch (e) {
      return response.status(500).json({ msj: 'Error al eliminar el registro' })
    }
  }
}

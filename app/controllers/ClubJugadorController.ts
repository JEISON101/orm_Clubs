import ClubJugadorServices from '#services/ClubJugadorServices'
import { HttpContext } from '@adonisjs/core/http'
import { InfoClubJugador } from '../interfaces/interfacesServices.js'

const cjugadorN = new ClubJugadorServices()

export default class ClubJugadorController {
  async createCJugador({ request, response }: HttpContext) {
    try {
      const { CodClub, CodJugador, liga } = request.body()
      const data: InfoClubJugador = { CodClub, CodJugador, liga }
      const cJugador = await cjugadorN.create(data)
      return response.status(201).json({ msj: 'Registro creado.', data: cJugador })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al crear el registro' })
    }
  }
  async readCJugadores({ response }: HttpContext) {
    try {
      const cjugador = await cjugadorN.read()
      return response.status(200).json({ msj: 'información obtenida', data: cjugador })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al obtener la información.' })
    }
  }
  async deleteCJugadores({params, response}:HttpContext){
    try{
        const {id} = params;
        await cjugadorN.delete(id);
        return response.status(200).json({msj:'Resgitro eliminado.'})
    }catch(e){
        return response.status(500).json({msj:'Error al eliminar el registro'})
    }
  }
}

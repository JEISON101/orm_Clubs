import ClubesServices from '#services/ClubesServices'
import { HttpContext } from '@adonisjs/core/http'

const clubN = new ClubesServices()

export default class ClubesController {
  async createClub({ request, response }: HttpContext) {
    try {
      const data = request.body()
      const club = await clubN.create(data)
      return response.status(201).json({ msj: 'Club creado', data: club })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al crear el registro' })
    }
  }
  async readClubes({ response }: HttpContext) {
    try {
      const clubes = await clubN.read()
      return response.status(200).json({ msj: 'Información obtenida', data: clubes })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al obtener informarcion.' })
    }
  }
  async deleteClub({params, response}:HttpContext){
    try{
        const {id} = params;
        await clubN.delete(id)
        return response.status(200).json({msj:'registro eliminado'})
    }catch(e){
        return response.status(500).json({msj:'Error al eliminar el registro'})
    }
  }
}

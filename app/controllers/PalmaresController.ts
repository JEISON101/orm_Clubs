import PalmaresServices from '#services/Palmares.Services'
import { HttpContext } from '@adonisjs/core/http'
import { InfoPalmares } from '../interfaces/interfacesServices.js'

const palmaresN = new PalmaresServices()

export default class PalmaresController {
  async createPalmares({ request, response }: HttpContext) {
    try {
      const { CodClub, CodTrofeo, anio } = request.body()
      const data: InfoPalmares = { CodClub, CodTrofeo, anio }
      const palmares = await palmaresN.create(data)
      return response.status(201).json({ msj: 'Registro creado.', data: palmares })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al eliminar el registro' })
    }
  }
  async readPalmares({response}:HttpContext){
    try{
        const palmares = await palmaresN.read()
        return response.status(200).json({msj:'Información obtenida', data: palmares});
    }catch(e){
        return response.status(500).json({msj:'Error interno.'})
    }
  }
  async delete({params, response}:HttpContext){
    try{
        const {id} = params;
        await palmaresN.delete(id);
        return response.status(200).json({msj:'Regitro eliminado.'})
    }catch(e){
        return response.status(500).json({msj:'Error al eliminar el registro'})
    }
  }
}

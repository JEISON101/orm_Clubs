import EquipacionServices from '#services/EquipacionServices'
import { HttpContext } from '@adonisjs/core/http'
import { InfoEquipacion } from '../interfaces/interfacesServices.js'

const equipoN = new EquipacionServices()

export default class Equipacioncontroller {
  async createEquipacion({ request, response }: HttpContext) {
    try {
      const { enCasa, CodClub } = request.body()
      const data: InfoEquipacion = { enCasa, CodClub }
      const equipo = await equipoN.create(data)
      return response.status(201).json({ msj: 'Equipo creado', data: equipo })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al crear el registro' })
    }
  }
  async readEquipaciones({response}:HttpContext){
    try{
        const equipaciones = await equipoN.read()
        return response.status(200).json({msj:'Información obtenida', data: equipaciones})
    }catch(e){
        return response.status(500).json({msj:'Error al encontrar la información.'})
    }
  }
  async deleteEquipacion({params, response}:HttpContext){
    try{
        const {id}= params;
        await equipoN.delete(id)
        return response.status(200).json({msj:'Registro eliminado'})
    }catch(e){
        return response.status(500).json({msj:'Error al eliminar el registro'})
    }
  }
}

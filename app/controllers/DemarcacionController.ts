import DemarcacionServices from '#services/DemarcacionServices'
import { HttpContext } from '@adonisjs/core/http'

const demarcacionN = new DemarcacionServices()


export default class DemarcacionController {
  async createDemarcacion({ request, response }: HttpContext) {
    try {
      const { demarcacion } = request.body();
      if(!demarcacion){
        return response.status(400).json({msj:'El campo demarcacion es obligatorio'})
      }
      const res = await demarcacionN.create({ demarcacion })
      return response.status(201).json({ msj: 'demarcación creada', datos: res })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al crear la demarcación' })
    }
  }
  async readDemarcaciones({ response }: HttpContext) {
    try {
      const res = await demarcacionN.read()
      return response.status(201).json({ msj: 'Información obtenida', data: res })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al encontrar la información' })
    }
  }
  async updateDemarcacion({ params, request, response }: HttpContext) {
    try {
      const { id } = params
      const { demarcacion } = request.body()
      if(!demarcacion){
        return response.status(400).json({msj:'El campo demarcacion es obligatorio'})
      }

      const res = await demarcacionN.update({ demarcacion }, id)
      return response.status(201).json({ msj: 'Informacion Actualizada', data: res })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al actualizar la información' })
    }
  }
  async deleteDemarcacion({ params, response }: HttpContext) {
    try {
      const { id } = params
      const res = await demarcacionN.delete(id)
      return response.status(201).json({ msj: 'Demarcación eliminada', data: res })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al eliminar' })
    }
  }
  async readDemarcacionById({ params, response }: HttpContext) {
    try {
      const { id } = params
      const res = await demarcacionN.readById(id);
      if(res === null){
        return response.status(400).json({ msj: 'Información no encontrada, verifica el ID'})
      }
      return response.status(200).json({ msj: 'Información encontrada', data: res })
    } catch (e) {
      response.status(500).json({ msj: 'No se encontro la informarción' })
    }
  }
}

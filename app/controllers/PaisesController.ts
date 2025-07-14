import PaisesServices from '#services/PaisesServices'
import { HttpContext } from '@adonisjs/core/http'

const paisesN = new PaisesServices()

export default class PaisesController {
  async createPaises({ request, response }: HttpContext) {
    try {
      const { nombrePais, comunitario } = request.body()
      if (!nombrePais || !comunitario) return response.status(400).json({ msj: 'faltan datos.' })

      const pais = await paisesN.create({ nombrePais, comunitario })
      return response.status(201).json({ msj: 'Pais creado', data: pais })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al crear el registro' })
    }
  }
  async readPaises({ response }: HttpContext) {
    try {
      const pais = await paisesN.read()
      return response.status(200).json({ msj: 'Información obtenida', data: pais })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al obtener la informacion' })
    }
  }
  async updatePais({ params, request, response }: HttpContext) {
    try {
      const { id } = params
      const { nombrePais, comunitario } = request.body()
      if (!nombrePais || !comunitario) return response.status(400).json({ msj: 'faltan datos.' })

      const pais = await paisesN.update({ nombrePais, comunitario }, id)
      return response.status(201).json({ msj: 'Pais actualizado', data: pais })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al actualizar el registro' })
    }
  }
  async deletePais({params, response}:HttpContext){
    try{
        const {id} = params;
        await paisesN.delete(id)
        return response.status(200).json({msj:'Registro eliminado'})
    }catch(e){
        return response.status(500).json({msj:'Error al eliminar el registro'})
    }
  }
}

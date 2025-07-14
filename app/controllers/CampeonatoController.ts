import CampeonatoServices from '#services/CampeonatoServices'
import { HttpContext } from '@adonisjs/core/http'

const campeonatoN = new CampeonatoServices()

export default class CampeonatoController {
  async createCampeonato({ request, response }: HttpContext) {
    try {
      const { nombreTrofeo } = request.body()
      if (!nombreTrofeo)
        return response.status(400).json({ msj: 'El campo nombreTrofeo es requerido.' })
      const campeonato = await campeonatoN.create({ nombreTrofeo })
      return response.status(201).json({ msj: 'campeonato creado', datos: campeonato })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al crear el campeonato.' })
    }
  }
  async readCampeonato({ response }: HttpContext) {
    try {
      const campeonato = await campeonatoN.read()
      return response.status(200).json({ msj: 'Información obtenida.', data: campeonato })
    } catch (e) {
      return response.status(500).json({ msj: 'Algo malo ocurrió.' })
    }
  }
  async updateCampeonato({ params, request, response }: HttpContext) {
    try {
      const { id } = params
      const { nombreTrofeo } = request.body()
      if (!nombreTrofeo)
        return response.status(400).json({ msj: 'El campo nombreTrofeo es requerido.' })
      const campeonato = await campeonatoN.update({ nombreTrofeo }, id)
      return response.status(200).json({ msj: 'El campeonato fue actualizado.', data: campeonato })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al actualizar el campeonato.' })
    }
  }
  async deleteCampeonato({ params, response }: HttpContext) {
    try {
      const { id } = params
      const campeonato = await campeonatoN.delete(id)
      return response.status(200).json({ msj: 'Registro eliminado', data: campeonato })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al eliminar el registro.' })
    }
  }
  async readCampeonatoById({ params, response }: HttpContext) {
    try {
      const { id } = params
      const campeonato = await campeonatoN.readById(id)
      if (campeonato === null)
        return response.status(400).json({ msj: 'Información no encontrada, verifica el ID' })
      return response.status(200).json({ msj: 'Información encontrada', data: campeonato })
    } catch (e) {
      return response.status(500).json({ msj: 'La información no se encontro.' })
    }
  }
}

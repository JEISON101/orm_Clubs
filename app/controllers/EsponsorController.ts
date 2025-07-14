import EsponsorServices from '#services/EsponsorServices'
import { HttpContext } from '@adonisjs/core/http'
import { InfoEsponsor } from '../interfaces/interfacesServices.js'

const esponsorN = new EsponsorServices()

export default class EsponsorController {
  async createEsponsor({ request, response }: HttpContext) {
    try {
      const { esponsor, CodClub } = request.body()
      const data: InfoEsponsor = { esponsor, CodClub }
      const esponsorNew = await esponsorN.create(data)
      return response.status(201).json({ msj: 'Registro creado.', data: esponsorNew })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al crear el registro' })
    }
  }
  async readEsponsor({ response }: HttpContext) {
    try {
      const esponsor = await esponsorN.read()
      return response.status(200).json({ msj: 'Información obtenida.', data: esponsor })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al obtener la información.' })
    }
  }
  async deleteEsponsor({ params, response }: HttpContext) {
    try {
      const { id } = params
      await esponsorN.delete(id)
      return response.status(200).json({ msj: 'Registro eliminado.' })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al eliminar el registro' })
    }
  }
}

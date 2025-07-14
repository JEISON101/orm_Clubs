import EntrenadoresServices from '#services/EntrenadoresServices'
import { HttpContext } from '@adonisjs/core/http'

const entrenadorN = new EntrenadoresServices()

export default class EntrenadoresController {
  async createEntrenador({ request, response }: HttpContext) {
    try {
      //Array de validacion de campos;
      const validacion = ['entrenador', 'fechaNacimiento', 'poblacion', 'provincia']

      const data = request.body()

      for (const dato of validacion) {
        if (!data[dato]) {
          return response.status(406).json({ msj: `Falta el campo ${dato}` })
        }
      }

      const entrenador = await entrenadorN.create(data)
      return response.status(201).json({ msj: 'Entrenador creado', data: entrenador })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al crear el registro' })
    }
  }
  async readEntrenadores({ response }: HttpContext) {
    try {
      const entrenadores = await entrenadorN.read()
      return response.status(200).json({ msj: 'Información obtenida', data: entrenadores })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al obtener la información' })
    }
  }
  async updateEntrenador({ params, request, response }: HttpContext) {
    try {
      const { id } = params
      //Array de validacion de campos;
      const validacion = ['entrenador', 'fechaNacimiento', 'poblacion', 'provincia']

      const data = request.body()

      for (const dato of validacion) {
        if (!data[dato]) {
          return response.status(406).json({ msj: `Falta el campo ${dato}` })
        }
      }

      const entrenador = await entrenadorN.update(data, id)
      return response.status(200).json({ msj: 'Registro actualizado', data: entrenador })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al actualizar el registro' })
    }
  }
  async deleteEntrenador({ params, response }: HttpContext) {
    try {
      const { id } = params
      await entrenadorN.delete(id)
      return response.status(200).json({ msj: 'Registro eliminado' })
    } catch (e) {
      return response.status(500).json({ msj: 'Error al eliminar el registro' })
    }
  }
  async readEntrenadorById({ params, response }: HttpContext) {
    try {
      const { id } = params
      const entrenador = await entrenadorN.readById(id)
      if (entrenador === null)
        return response.status(400).json({ msj: 'No se encontro la información' })
      return response.status(200).json({ msj: 'Informació obtenida', data: entrenador })
    } catch (e) {
      return response.status(400).json({ msj: 'Información no encontrada, verifica el ID' })
    }
  }
}

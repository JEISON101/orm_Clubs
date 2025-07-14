import Entrenadore from '#models/entrenadore'
import { InfoEntrenadores } from '../interfaces/interfacesServices.js'

export default class EntrenadoresServices {
  async create(data: InfoEntrenadores) {
    return await Entrenadore.create(data)
  }
  async read() {
    return await Entrenadore.all()
  }
  async update(data: InfoEntrenadores, id: any) {
    const entrenador = await Entrenadore.findOrFail(id)
    entrenador.entrenador = data.entrenador
    entrenador.fechaNacimiento = data.fechaNacimiento
    entrenador.poblacion = data.poblacion
    entrenador.provincia = data.provincia
    return await entrenador.save()
  }
  async delete(id: any) {
    const entrenador = await Entrenadore.findOrFail(id)
    return await entrenador.delete()
  }
  async readById(id: any) {
    return await Entrenadore.find(id)
  }
}

import Demarcacion from '#models/demarcacion'
import { InfoDemarcacion } from '../interfaces/interfacesServices.js'

export default class DemarcacionServices {
  async create({ demarcacion }: InfoDemarcacion) {
    return await Demarcacion.create({ demarcacion })
  }
  async read() {
    return await Demarcacion.all()
  }
  async update(data: InfoDemarcacion, id: any) {
    const demarcacion = await Demarcacion.findOrFail(id)
    demarcacion.demarcacion = data.demarcacion
    return await demarcacion.save()
  }
  async delete(id: any) {
    const demarcacion = await Demarcacion.findOrFail(id)
    return await demarcacion.delete()
  }
  async readById(id: any) {
    const demarcacion = await Demarcacion.find(id)
    return demarcacion
  }
}

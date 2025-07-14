import Palmare from '#models/palmare'
import { InfoPalmares } from '../interfaces/interfacesServices.js'

export default class PalmaresServices {
  async create(data: InfoPalmares) {
    return await Palmare.create(data)
  }
  async read() {
    return await Palmare.all()
  }
  async delete(id: any) {
    const palmares = await Palmare.findOrFail(id)
    return await palmares.delete()
  }
}

import SociosServices from '#services/SociosServices'
import { HttpContext } from '@adonisjs/core/http'
import { InfoSocios } from '../interfaces/interfacesServices.js'

const socioN = new SociosServices();

export default class SociosController {
  async createSocio({ request, response }: HttpContext) {
    try {
      const { codPost, nombre, apellidos, direccion, provincia, fechaAlta, cuotaActual, CodClub } = request.body();
      const data: InfoSocios = { codPost, nombre, apellidos, direccion, provincia, fechaAlta, cuotaActual, CodClub };
      const socio = await socioN.create(data);
      return response.status(201).json({msj:'Registro creado', data:socio})
    } catch (e) {
      return response.status(500).json({ msj: 'Error al crear el registro' })
    }
  }
  async readSocios({response}:HttpContext){
    try{
        const socios = await socioN.read();
        return response.status(200).json({msj:'Información obtenida', data: socios})
    }catch(e){
        return response.status(500).json({msj:'Error interno.'})
    }
  }
  async deleteSocio({params, response}:HttpContext){
    try{
        const {id} = params;
        await socioN.delete(id)
        return response.status(200).json({msj:'Registro eliminado'})
    }catch(e){
        return response.status(500).json({msj:'Error interno.'})
    }
  }
}

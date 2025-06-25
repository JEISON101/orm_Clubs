import { PaisService } from "#services/PaisService";
import { HttpContext } from "@adonisjs/core/http";
const paisService = new PaisService()
export class PaisController {

    async crearPais({ request, response }: HttpContext) {
        const data = request.body();
        try {
            const nuevoPais = await paisService.createPais(data);
            return response.json({mjs:'EL PAIS HA SIDO CREADO CORRECTAMENTE', pais:nuevoPais})
        } catch (error) {
            return response.json({mjs:'HA OCURRIDO UN ERROR AL CREAR EL PAIS', error:error})
        }
    }

    async listarPaises({response}:HttpContext) {
        try {
            const paises = await paisService.listPaises();
            return response.json({mjs:'ESTA ES LA LISTA DE LOS PAISES', paises:paises})
        } catch (error) {
            return response.json({mjs:'NO SE PUDIERON CARGAR LOS PAISES', error:error})
        }
    }

    async actualizarPais({params, request, response}:HttpContext){
        try {
            const pais = await paisService.updatePais(params.cod_pais, request.body())
            return response.json({mjs:'EL PAIS HA SIDO ACTUALIZADO CORRECTAMENTE', pais:pais})
        } catch (error) {
            return response.json({mjs:'HUBO UN PROBLEMA AL ACTUALIZAR EL PAIS', error:error})
        }
    }

    async eliminarPais({params, response}:HttpContext){
        try {
            await paisService.deletePais(params.cod_club)
            return response.json({mjs:'EL PAIS HA SIDO ELIMINADO EXITOSAMENTE'})
        } catch (error) {
            return response.json({mjs:' OCURRIÓ UN PROBLEMA AL ELIMINAR EL PAIS', error:error})
        }
    }

}
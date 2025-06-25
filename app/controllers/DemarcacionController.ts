import { DemarcacionService } from "#services/DemarcacionService";
import { HttpContext } from "@adonisjs/core/http";
const demarService = new DemarcacionService()
export class DemarcacionController {

    async crearDemarcacion({ request, response }: HttpContext) {
        const data = request.body();
        try {
            const nuevaDemarcacion = await demarService.createDemarcacion(data);
            return response.json({mjs:'LA DEMARCACIÓN HA SIDO CREADO CORRECTAMENTE', demarcacion:nuevaDemarcacion})
        } catch (error) {
            return response.json({mjs:'HA OCURRIDO UN ERROR AL CREAR LA DEMARCACION', error:error})
        }
    }

    async listarDemarcacion({response}:HttpContext) {
        try {
            const demarcaciones = await demarService.listDemarcaciones();
            return response.json({mjs:'ESTA ES LA LISTA DE LAS DEMARCACIONES', demarcaciones:demarcaciones})
        } catch (error) {
            return response.json({mjs:'NO SE PUDIERON CARGAR LAS DEMARCACIONES', error:error})
        }
    }

    async actualizarDemarcacion({params, request, response}:HttpContext){
        try {
            const demarcacion = await demarService.updateDemarcacion(params.cod_dem, request.body())
            return response.json({mjs:'LA DEMARCACION HA SIDO ACTUALIZADO CORRECTAMENTE', demarcacion:demarcacion})
        } catch (error) {
            return response.json({mjs:'HUBO UN PROBLEMA AL ACTUALIZAR LA DEMARCACION', error:error})
        }
    }

    async eliminarDemarcacion({params, response}:HttpContext){
        try {
            await demarService.deleteDemarcacion(params.cod_dem)
            return response.json({mjs:'LA DEMARCACION HA SIDO ELIMINADO EXITOSAMENTE'})
        } catch (error) {
            return response.json({mjs:'OCURRIÓ UN PROBLEMA AL ELIMINAR LA DEMARCACION', error:error})
        }
    }

}
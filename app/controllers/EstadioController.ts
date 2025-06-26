import { EstadioService } from "#services/estadioService";
import { HttpContext } from "@adonisjs/core/http";
const estadioService = new EstadioService()
export class EstadioController {

    async crearEstadio({ request, response }: HttpContext) {
        const data = request.body();
        try {
            const nuevoEstadio = await estadioService.createEstadio(data);
            return response.json({mjs:'EL ESTADIO HA SIDO CREADO CORRECTAMENTE', nuevoEstadio:nuevoEstadio})
        } catch (error) {
            return response.json({mjs:'HA OCURRIDO UN ERROR AL CREAR EL ESTADIO', error:error})
        }
    }

    async verEstadio({params, response}:HttpContext) {
        try {
            const estadio = await estadioService.viewEstadio(params.cod_estadio);
            if(estadio.length > 0){
                return response.json({mjs:'ESTADIO ENCONTRADO', estadio:estadio})
            }else{
                return response.json({mjs:'404, ESTADIO NO ENCONTRADO'})
            }
        } catch (error) {
            return response.json({mjs:'HA OCURRIDO UN ERROR AL BUSCAR EL ESTADIO', error:error})
        }
    }

    async contarEstadios({response}:HttpContext){
        try {
            const estadios = await estadioService.countEstadios();
            return response.json({mjs:estadios[0].$extras.cantidad})
        } catch (error) {
            return response.json({mjs:'NO SE PUEDIERON CONTAR LOS ESTADIOS'})
        }
    }

    async listarEstadios({response}:HttpContext) {
        try {
            const estadios = await estadioService.listEstadios();
            return response.json({mjs:'ESTA ES LA LISTA DE LOS ESTADIOS', estadios:estadios})
        } catch (error) {
            return response.json({mjs:'NO SE PUDIERON CARGAR LOS ESTADIOS', error:error})
        }
    }

    async actualizarEstadio({params, request, response}:HttpContext){
        try {
            const estadio = await estadioService.updateEstadio(params.cod_estadio, request.body())
            return response.json({mjs:'EL ESTADIO HA SIDO ACTUALIZADO CORRECTAMENTE', estadio:estadio})
        } catch (error) {
            return response.json({mjs:'HUBO UN PROBLEMA AL ACTUALIZAR EL ESTADIO', error:error})
        }
    }

    async eliminarEstadio({params, response}:HttpContext){
        try {
            await estadioService.deleteEstadio(params.cod_estadio)
            return response.json({mjs:'EL ESTADIO HA SIDO ELIMINADO EXITOSAMENTE'})
        } catch (error) {
            return response.json({mjs:' OCURRIÓ UN PROBLEMA AL ELIMINAR EL ESTADIO', error:error})
        }
    }

}
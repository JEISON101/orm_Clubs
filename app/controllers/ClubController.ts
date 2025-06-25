import { ClubServices } from "#services/ClubService";
import { HttpContext } from "@adonisjs/core/http";
const clubservice = new ClubServices()
export class ClubController {

    async crearClub({ request, response }: HttpContext) {
        const data = request.body();
        try {
            const nuevoClub = await clubservice.createClub(data);
            return response.json({mjs:'EL CLUB HA SIDO CREADO CORRECTAMENTE', club:nuevoClub})
        } catch (error) {
            return response.json({mjs:'HA OCURRIDO UN ERROR AL CREAR EL CLUB', error:error})
        }
    }

    async listarClubs({response}:HttpContext) {
        try {
            const clubs = await clubservice.listClubs();
            return response.json({mjs:'ESTA ES LA LISTA DE LOS CLUBS', clubs:clubs})
        } catch (error) {
            return response.json({mjs:'NO SE PUDIERON CARGAR LOS CLUBS', error:error})
        }
    }

    async actualizarClub({params, request, response}:HttpContext){
        try {
            const club = await clubservice.updateClub(params.cod_club, request.body())
            return response.json({mjs:'EL CLUB HA SIDO ACTUALIZADO CORRECTAMENTE', club:club})
        } catch (error) {
            return response.json({mjs:'HUBO UN PROBLEMA AL ACTUALIZAR EL CLUB', error:error})
        }
    }

    async eliminarClub({params, response}:HttpContext){
        try {
            await clubservice.deleteClub(params.cod_club)
            return response.json({mjs:'EL CLUB HA SIDO ELIMINADO EXITOSAMENTE'})
        } catch (error) {
            return response.json({mjs:' OCURRIÓ UN PROBLEMA AL ELIMINAR EL CLUB', error:error})
        }
    }

}
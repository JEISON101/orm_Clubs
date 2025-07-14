import ClubJugador from "#models/club_jugador";
import { InfoClubJugador } from "../interfaces/interfacesServices.js";

export default class ClubJugadorServices{
    async create(data:InfoClubJugador){
        return await ClubJugador.create(data);
    }
    async read(){
        return await ClubJugador.all()
    }
    async delete(id:any){
        const cjugador = await ClubJugador.findOrFail(id);
        return await cjugador.delete()
    }
}
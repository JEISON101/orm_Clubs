import Jugadore from "#models/jugadore";
import { InfoJugadores } from "../interfaces/interfacesServices.js";

export default class JugadoresServices{
    async create(data:InfoJugadores){
        return await Jugadore.create(data)
    }
    async read(){
        return await Jugadore.all()
    }
    async delete(id:any){
        const jugador = await Jugadore.findOrFail(id)
        return await jugador.delete()
    }
}
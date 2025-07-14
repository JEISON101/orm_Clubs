import Campeonato from "#models/campeonato";
import { InfoCampeonato } from "../interfaces/interfacesServices.js";

export default class CampeonatoServices{
    async create ({nombreTrofeo}:InfoCampeonato){
        return await Campeonato.create({nombreTrofeo})
    }
    async read (){
        return await Campeonato.all()
    }
    async update({nombreTrofeo}:InfoCampeonato, id:any){
        const campeonato = await Campeonato.findOrFail(id);
        campeonato.nombreTrofeo = nombreTrofeo
        return await campeonato.save()
    }
    async delete(id:any){
        const campeonato = await Campeonato.findOrFail(id)
        return await campeonato.delete()
    }
    async readById(id:any){
        return await Campeonato.find(id)
    }

}
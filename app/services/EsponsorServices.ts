import Esponsor from "#models/esponsor";
import { InfoEsponsor } from "../interfaces/interfacesServices.js";

export default class EsponsorServices{
    async create(data:InfoEsponsor){
        return await Esponsor.create(data)
    }
    async read(){
        return await Esponsor.all()
    }
    async delete(id:any){
        const esponsor = await Esponsor.findOrFail(id);
        return await esponsor.delete()
    }
}
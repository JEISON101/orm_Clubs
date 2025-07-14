import Clube from "#models/clube";
import { InfoClubes } from "../interfaces/interfacesServices.js";

export default class ClubesServices{
    async create(data: InfoClubes){
        return await Clube.create(data)
    }
    async read(){
        return await Clube.all()
    }
    async delete(id:any){
        const club = await Clube.findOrFail(id);
        return await club.delete()
    }
}
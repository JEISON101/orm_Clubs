import Socio from "#models/socio";
import { InfoSocios } from "../interfaces/interfacesServices.js";

export default class SociosServices{
    async create (data:InfoSocios){
        return await Socio.create(data)
    }
    async read(){
        return await Socio.all()
    }
    async delete(id:any){
        const socio = await Socio.findOrFail(id);
        return await socio.delete();
    }
}
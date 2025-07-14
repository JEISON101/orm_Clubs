import Paise from "#models/paise";
import { InfoPaises } from "../interfaces/interfacesServices.js";


export default class PaisesServices{
    async create({nombrePais, comunitario}: InfoPaises){
        return await Paise.create({nombrePais, comunitario})
    }
    async read(){
        return await Paise.all()
    }
    async update({nombrePais, comunitario}: InfoPaises, id:any){
        const pais = await Paise.findOrFail(id);
        pais.nombrePais = nombrePais;
        pais.comunitario = comunitario;
        return await pais.save()
    }
    async delete(id:any){
        const pais = await Paise.findOrFail(id);
        return await pais.delete()
    }
}
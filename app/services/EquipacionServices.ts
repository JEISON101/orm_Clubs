import Equipacion from "#models/equipacion";
import { InfoEquipacion } from "../interfaces/interfacesServices.js";

export default class EquipacionServices{
    async create(data:InfoEquipacion){
        return await Equipacion.create(data)
    }
    async read(){
        return await Equipacion.all();
    }
    async delete(id:any){
        const equipo = await Equipacion.findOrFail(id);
        return await equipo.delete();
    }
}
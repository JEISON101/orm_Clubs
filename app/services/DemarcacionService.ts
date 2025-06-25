import Demarcacion from "#models/demarcacion";

export class DemarcacionService {
    
    async createDemarcacion(data:any){
        return await Demarcacion.create(data);
    }
    
    async listDemarcaciones(){
        return await Demarcacion.query()
    }

    async viewDemarcacion(cod_dem:number){
        return await Demarcacion.query().where('cod_dem', cod_dem)
    }
    
    async updateDemarcacion(cod_dem:number, data:any){
        const demarcacion = await Demarcacion.findByOrFail('cod_dem',cod_dem)
        demarcacion.merge(data).save()
    }
    
    async deleteDemarcacion(cod_dem:number){
        const demarcacion = await Demarcacion.findByOrFail('cod_dem', cod_dem)
        return await demarcacion.delete()
    }  
}
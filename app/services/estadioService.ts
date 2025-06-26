import Estadio from "#models/estadio";

export class EstadioService {
 
    async createEstadio(data:any){
        return await Estadio.create(data);
    }
    
    async listEstadios(){
        return await Estadio.query()
    }

    async viewEstadio(cod_estadio:number){
        return await Estadio.query().where('cod_estadio', cod_estadio)
    }

    async countEstadios(){
        return await Estadio.query().count('* as cantidad')
    }
    
    async updateEstadio(cod_estadio:number, data:any){
        const estadio = await Estadio.findByOrFail('cod_estadio',cod_estadio)
        await estadio.merge(data)
        await estadio.save()
        return estadio
    }
    
    async deleteEstadio(cod_estadio:number){
        const estadio = await Estadio.findByOrFail('cod_estadio', cod_estadio)
        return await estadio.delete()
    }  
}
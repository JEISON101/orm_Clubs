import Pais from "#models/pais";

export class PaisService {

    async createPais(data:any){
        return await Pais.create(data);
    }
    
    async listPaises(){
        return await Pais.query()
    }

    async viewPais(cod_pais:number){
        return await Pais.query().where('cod_pais', cod_pais)
    }
    
    async updatePais(cod_pais:number, data:any){
        const pais = await Pais.findByOrFail('cod_pais',cod_pais)
        await pais.merge(data)
        await pais.save()
        return pais
    }
    
    async deletePais(cod_pais:number){
        const pais = await Pais.findByOrFail('cod_pais', cod_pais)
        return await pais.delete()
    }  
}
import Club from '../models/club.js'

export class ClubServices {
 
    async createClub(data:any){
        return await Club.create(data);
    }
    
    async listClubs(){
        return await Club.query()
    }

    async viewClub(cod_club:number){
        return await Club.query().where('cod_club', cod_club)
    }
    
    async updateClub(cod_club:number, data:any){
        const club = await Club.findByOrFail('cod_club',cod_club)
        club.merge(data).save()
    }
    
    async deleteClub(cod_club:number){
        const club = await Club.findByOrFail('cod_club', cod_club)
        return await club.delete()
    }  
}
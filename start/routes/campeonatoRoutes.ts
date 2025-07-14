import router from "@adonisjs/core/services/router";
import CampeonatoController from "#controllers/CampeonatoController";

const campeonato = new CampeonatoController()

router.post('/api/v1/campeonato', campeonato.createCampeonato);
router.get('/api/v1/campeonato', campeonato.readCampeonato);
router.get('/api/v1/campeonato/:id', campeonato.readCampeonatoById);
router.put('/api/v1/campeonato/:id', campeonato.updateCampeonato);
router.delete('/api/v1/campeonato/:id', campeonato.deleteCampeonato);
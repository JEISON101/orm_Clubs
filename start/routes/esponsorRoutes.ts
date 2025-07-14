import router from "@adonisjs/core/services/router";
import EsponsorController from "#controllers/EsponsorController";

const esponsor = new EsponsorController();

router.post('/api/v1/esponsor', esponsor.createEsponsor);
router.get('/api/v1/esponsor', esponsor.readEsponsor);
router.delete('/api/v1/esponsor/:id', esponsor.deleteEsponsor);
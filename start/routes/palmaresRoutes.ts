import router from "@adonisjs/core/services/router";
import PalmaresController from "#controllers/PalmaresController";

const palmares = new PalmaresController();

router.post('/api/v1/palmares', palmares.createPalmares);
router.get('/api/v1/palmares', palmares.readPalmares);
router.delete('/api/v1/palmares/:id', palmares.delete);
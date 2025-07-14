import router from "@adonisjs/core/services/router";
import SociosController from "#controllers/SociosController";

const socios = new SociosController();

router.post('/api/v1/socios', socios.createSocio);
router.get('/api/v1/socios', socios.readSocios);
router.delete('/api/v1/socios/:id', socios.deleteSocio);
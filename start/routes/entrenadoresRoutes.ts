import router from "@adonisjs/core/services/router";
import EntrenadoresController from "#controllers/EntrenadoresController";

const entrenador = new EntrenadoresController();

router.post('/api/v1/entrenadores', entrenador.createEntrenador);
router.get('/api/v1/entrenadores', entrenador.readEntrenadores);
router.get('/api/v1/entrenadores/:id', entrenador.readEntrenadorById);
router.delete('/api/v1/entrenadores/:id', entrenador.deleteEntrenador);
router.put('/api/v1/entrenadores/:id', entrenador.updateEntrenador);
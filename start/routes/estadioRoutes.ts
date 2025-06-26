import { EstadioController } from "#controllers/EstadioController";
import router from "@adonisjs/core/services/router";

const estadio = new EstadioController()

router.post('/estadio', estadio.crearEstadio)
router.get('/estadios', estadio.listarEstadios)
router.get('/cantidad/estadios', estadio.contarEstadios)
router.get('/estadio/:cod_estadio', estadio.verEstadio)
router.put('/estadio/:cod_estadio', estadio.actualizarEstadio)
router.delete('/estadio/:cod_estadio', estadio.eliminarEstadio)
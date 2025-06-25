import { DemarcacionController } from "#controllers/DemarcacionController"
import router from "@adonisjs/core/services/router"

const demarcacion = new DemarcacionController()

router.post('/demarcacion', demarcacion.crearDemarcacion)
router.get('/demarcaciones', demarcacion.listarDemarcacion)
router.put('/demarcacion/:cod_dem', demarcacion.actualizarDemarcacion)
router.delete('/demarcacion/:cod_dem', demarcacion.eliminarDemarcacion)
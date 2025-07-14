import router from '@adonisjs/core/services/router'
import DemarcacionController from '#controllers/DemarcacionController'

const demarcacion = new DemarcacionController()

router.post('/api/v1/demarcacion', demarcacion.createDemarcacion)
router.get('/api/v1/demarcacion', demarcacion.readDemarcaciones)
router.get('/api/v1/demarcacion/:id', demarcacion.readDemarcacionById)
router.put('/api/v1/demarcacion/:id', demarcacion.updateDemarcacion)
router.delete('/api/v1/demarcacion/:id', demarcacion.deleteDemarcacion)

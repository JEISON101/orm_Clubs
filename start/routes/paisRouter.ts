import router from '@adonisjs/core/services/router'
import { PaisController } from '#controllers/PaisController'

const pais = new PaisController()

router.post('/pais', pais.crearPais)
router.get('/paises', pais.listarPaises)
router.put('/pais/:cod_pais', pais.actualizarPais)
router.delete('/pais/:cod_pais', pais.eliminarPais)
import router from '@adonisjs/core/services/router'
import { ClubController } from '#controllers/ClubController'

const club = new ClubController()

router.post('/club', club.crearClub)
router.get('/clubs', club.listarClubs)
router.put('/club/:cod_club', club.actualizarClub)
router.delete('/club/:cod_club', club.eliminarClub)
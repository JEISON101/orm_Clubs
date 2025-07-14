import router from "@adonisjs/core/services/router";
import JugadoresController from "#controllers/JugadoresController";

const jugadores = new JugadoresController();

router.post('/api/v1/jugadores', jugadores.createJugador);
router.get('/api/v1/jugadores', jugadores.readJugadores);
router.delete('/api/v1/jugadores/:id', jugadores.deleteJugador);
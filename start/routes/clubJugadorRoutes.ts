import router from "@adonisjs/core/services/router";
import ClubJugadorController from "#controllers/ClubJugadorController";

const cjugador = new ClubJugadorController();

router.post('/api/v1/clubjugadores', cjugador.createCJugador);
router.get('/api/v1/clubjugadores', cjugador.readCJugadores);
router.delete('/api/v1/clubjugadores/:id', cjugador.deleteCJugadores);
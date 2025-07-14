import router from "@adonisjs/core/services/router";
import ClubesController from "#controllers/ClubesController";

const club = new ClubesController();

router.post('/api/v1/clubes', club.createClub);
router.get('/api/v1/clubes', club.readClubes);
router.delete('/api/v1/clubes/:id', club.deleteClub);
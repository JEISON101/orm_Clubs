import router from "@adonisjs/core/services/router";
import PaisesController from "#controllers/PaisesController";

const pais = new PaisesController();

router.post('/api/v1/paises', pais.createPaises);
router.get('/api/v1/paises', pais.readPaises);
router.put('/api/v1/paises/:id', pais.updatePais);
router.delete('/api/v1/paises/:id', pais.deletePais);
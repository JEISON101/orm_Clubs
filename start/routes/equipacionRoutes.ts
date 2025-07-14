import router from "@adonisjs/core/services/router";
import Equipacioncontroller from "#controllers/EquipacionController";

const equipacion = new Equipacioncontroller();

router.post('/api/v1/equipaciones', equipacion.createEquipacion);
router.get('/api/v1/equipaciones', equipacion.readEquipaciones);
router.delete('/api/v1/equipaciones/:id', equipacion.deleteEquipacion);
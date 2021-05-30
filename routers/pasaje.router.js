const pasajeCtrl = require('../controllers/pasaje.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();


router.post('/', pasajeCtrl.cratePasaje);
router.get('/', pasajeCtrl.getPasaje);
router.get('/:id', pasajeCtrl.getunPasaje);
router.delete('/:id', pasajeCtrl.deletePasaje);
router.put('/:id', pasajeCtrl.modificarPasaje);
router.get('/EL/:id', pasajeCtrl.getcategoriaPasajero);


module.exports = router;
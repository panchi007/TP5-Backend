const logtraductorCtrl = require('../controllers/logTraductor.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();



router.post('/', logtraductorCtrl.crateLog);
router.get('/', logtraductorCtrl.getLog);
router.get('/:id', logtraductorCtrl.getLogparams);


module.exports = router;
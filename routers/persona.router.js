const personaCtrl = require('../controllers/persona.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();


router.get('/', personaCtrl.getPersona);
router.post('/', personaCtrl.cratePersona);
router.get('/:id', personaCtrl.getUnaPersona);

module.exports = router;
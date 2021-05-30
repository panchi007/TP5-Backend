const noticiaCtrl = require('../controllers/noticia.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();


router.post('/', noticiaCtrl.crateNoticia);
router.get('/', noticiaCtrl.getNoticias);
router.delete('/:id', noticiaCtrl.deleteNoticia);
router.put('/:id', noticiaCtrl.modificarNoticia)




////////////////////////   MIS PRUEVAS

router.post('/nacion' , noticiaCtrl.mandarconelbody)

router.get('/nacion/:id' , noticiaCtrl.mandarconelparams)

module.exports = router;
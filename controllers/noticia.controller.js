const Noticia = require('../models/noticia')
const noticiaCtrl = {}



noticiaCtrl.crateNoticia = async (req, res) => {
    var noticia = new Noticia(req.body);
    console.log(noticia)
    try {
        await noticia.save();
        res.json({
            noticia: noticia,
            'status': '1',
            'msg': 'Noticia guardada.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

noticiaCtrl.getNoticias = async (req, res) => {

    
    var noticia = await Noticia.find().exec();

    // var doubles = noticia.map(function (x) {
    //     return x;
    // });

    res.json(noticia);
}

noticiaCtrl.deleteNoticia = async (req, res) => {
    try {
        await Noticia.findByIdAndRemove({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Noticia borrada'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

noticiaCtrl.modificarNoticia = async (req, res) => {
    const notici = new Noticia(req.body);
    try {
        await notici.findByIdAndUpdate({ _id: req.params._id }, notici);
        res.json({
            'status': '1',
            'msg': 'Noticia actualizada'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////// MIS PRUEVAS
/////////////////////////////////////////////////////////////////////////
noticiaCtrl.mandarconelbody = (req, res) => {

    // var not = new Noticia()
    var elimal = (req.body.email)
    var dsa = (req.body.password)

    console.log(elimal),// "user@example.com"
        console.log(dsa) // "helloworld"

    // res.send(
    //     "mensaje enviado"
    // )
    res.json({
        elimal: elimal,
        dsa: dsa
    })
}


noticiaCtrl.mandarconelparams = (req, res) => {
    var elparametro = req.params.id
    res.send("le manda el paramatro por la url con el metodo get " + elparametro)
}

module.exports = noticiaCtrl;
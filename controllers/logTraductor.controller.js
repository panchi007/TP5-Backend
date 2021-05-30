const logTraductor = require('./../models/logTraductor')
const logtraductorCtrl = {}

logtraductorCtrl.crateLog = async (req, res) => {
    var log = new logTraductor(req.body);
    console.log(log)
    try {
        await log.save();
        res.json({
            log: log,
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

logtraductorCtrl.getLog = async (req, res) => {
    var log = await logTraductor.find()
    res.json(log);
}

logtraductorCtrl.getLogparams = async (req, res) => {

    var elid = (req.params.id)
    var noticia = await logTraductor.find({ idiomaOrigen: elid }).exec();
    res.json(noticia);
}

module.exports = logtraductorCtrl;
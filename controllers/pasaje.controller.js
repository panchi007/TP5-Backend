const Pasaje = require('../models/pasaje')
const PasajeCtrl = {}

PasajeCtrl.cratePasaje = async (req, res) => {
    var pasaje = new Pasaje(req.body);
    console.log(pasaje)
    try {
        await pasaje.save();
        res.json({
            'status': '1',
            'msg': 'pasaje guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion post.'
        })
    }
}

PasajeCtrl.getPasaje = async (req, res) => {
    var pasaje = await Pasaje.find().populate("pasajero");
    res.json(pasaje);
}

PasajeCtrl.getunPasaje = async (req, res) => {
    const pas = await Pasaje.findById(req.params.id).populate("pasajero");
    res.json(pas);
}


PasajeCtrl.deletePasaje = async (req, res) => {
    try {
        await Pasaje.findByIdAndRemove({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'pasaje borrada'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

PasajeCtrl.modificarPasaje = async (req, res) => {
    const pasaje = new Pasaje(req.body);
    try {
        await Pasaje.updateOne({ _id: req.body._id }, pasaje);
        res.json({
            'status': '1',
            'msg': 'pasaje actualizado'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion de modificacion'
        })
    }
}

PasajeCtrl.getcategoriaPasajero = async (req, res) => {

    var elid = (req.params.id)
    var noticia = await Pasaje.find({ categoriaPasajero: elid }).exec();
    var doubles = noticia.map(function (x) {
        return x;
    });

    res.json(doubles);
}



module.exports = PasajeCtrl;
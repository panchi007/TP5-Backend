const Persona = require('../models/persona')
const PersonaCtrl = {}


PersonaCtrl.cratePersona = async (req, res) => {
    var persona = new Persona(req.body);
    console.log(persona)
    try {
        await persona.save();
        res.json({
            persona: persona,
            'status': '1',
            'msg': 'persona guardada.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

PersonaCtrl.getPersona = async (req, res) => {
    var persona = await Persona.find();
    res.json(persona);
}

PersonaCtrl.getUnaPersona = async (req, res) => {
    const persona = await Persona.findById(req.params.id);
    res.json(persona);

}



module.exports = PersonaCtrl;
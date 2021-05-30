const mongoose = require('mongoose');
const { Schema } = mongoose;
const logTraductorSchema = new Schema({

    textoOrigen: { type: String, required: true },
    idiomaOrigen: { type: String, required: true },
    textoDestino: { type: String, required: true },
    idiomaDestino: { type: String, required: true }

})


module.exports = mongoose.models.logTraductor || mongoose.model('logTraductor', logTraductorSchema);
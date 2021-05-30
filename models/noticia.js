const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoticiaSchema = new Schema({

    titulo: { type: String, required: true },
    noticia: { type: String, required: true },
    img: { type: String, required: true },
    vigente: { type: Boolean, required: true }


})

module.exports = mongoose.models.Noticia || mongoose.model('Noticia', NoticiaSchema);

// module.exports =  mongoose.model('Noticia', NoticiaSchema); DE LAS DOS MANERAS ES IGUAL EXPORTARLO


// {
//     versionKey: false // You should be aware of the outcome after set to false   ESTO DESAVILITA "__v" AL PONER EL AWAIT APARECE 
// }
const mongoose = require('mongoose');
const URI = 'mongodb://localhost/TP5_backend_vito_bernardo_bernal';
mongoose.connect(URI)
.then(db=>console.log('DB is connected'))
.catch(err=>console.error(err))
module.exports = mongoose;
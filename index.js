var express = require('express');
var app = express();
const { mongoose } = require('./database')
const cors = require('cors');
//middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
//Cargamos el modulo de direccionamiento de rutas para puntos
app.use('/api/noticia', require('./routers/noticia.route'));
//app.use('/api/agente', require('./routes/agente.route.js'));
//app.use('/api/sector', require('./routes/sector.route'));
////////////////////////////////////////////////////////////////

app.use('/api/persona', require('./routers/persona.router'));
app.use('/api/pasaje', require('./routers/pasaje.router'));
app.use('/api/logtraductor', require('./routers/logtraductor.router'));


//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});

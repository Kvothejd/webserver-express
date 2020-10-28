const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

// Para correr en Heroku se lee de esa variable, de lo contrario con 3000
const port = process.env.PORT || 3000;

// middleware -> callback  -> carpeta public que queremos servir
// en este caso la carpeta ./public
app.use( express.static( __dirname + '/public'));

// __dirname is current PATH
hbs.registerPartials(__dirname + '/views/parciales');

// Express HBS engine
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
    res.render('home', { 
        nombre: 'javier h. delmastro'
    })
  })

app.get('/about', function (req, res) {
    res.render('about')
  })  
 

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto {port}`);
})
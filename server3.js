

const express = require('express');
const app = express();
const hbs = require('hbs');

// middleware -> callback  -> carpeta public que queremos servir
// en este caso la carpeta ./public
app.use( express.static( __dirname + '/public'));

// __dirname is current PATH
hbs.registerPartials(__dirname + '/views/parciales');

// Express HBS engine
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
    res.render('home', { 
        nombre: 'Javier ',
        anio: new Date().getFullYear()
    })
  })

app.get('/about', function (req, res) {
    res.render('about', {         
        anio: new Date().getFullYear()
    })
  })  
 

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
})
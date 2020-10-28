const express = require('express');
const app = express();

// middleware -> callback  -> carpeta public que queremos servir
// en este caso la carpeta ./public
app.use( express.static( __dirname + '/public'));


// http://localhost:3000/home.html debo especificar .html por supuesto!

app.get('/data', function (req, res) {
    res.send('Hola desde Data');      
  })
 

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
})
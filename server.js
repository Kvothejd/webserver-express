const express = require('express');
const app = express();


app.use( express.static( __dirname + '/public'));

// Solo trabaja con "/"
app.get('/', function (req, res) {
  // res.send('Hola Mundo!')

  let salida = {
    nombre: 'Fernando',
    edad:32,
    url:req.url
    }

    res.send(salida);
    
})


app.get('/data', function (req, res) {
    res.send('Hola desde Data');      
  })
 
// app.listen(3000)

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
})
const express = require('express');
const products = require('./p2ModuleArrayObject');

const app = express();

app.get('/home',(req, res) => {
    res.send('Hola Mundo 3000');
});

app.get('/products',(req, res) => {
    res.send(products);
});

app.listen(3000,() =>  {
    console.log("servidor corriendo 3000");
})
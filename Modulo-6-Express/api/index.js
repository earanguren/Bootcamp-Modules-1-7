const express = require('express');
const products = require('../p2ModuleArrayObject');
const app = express();
const api = require('../api/products');;

app.use(express.json());
app.use('/api', products);


app.listen(8084,() =>  {
    console.log("servidor corriendo 8084");
})
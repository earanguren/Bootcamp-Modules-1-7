/*
let products = [
    {id: 1, name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    {id: 2, name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    {id: 3, name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    {id: 4, name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    {id: 5, name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    {id: 6, name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    {id: 7, name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    {id: 8, name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    {id: 9, name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    {id: 10, name: 'Monitor', price: 200, quantity: 3, colors: [] },
]


Vamos a crear un CRUD con los siguientes endpoints que, mediante Postman, nos permita:

1. Retornar todos los productos del array. “/api/products”,
2. Obtener un producto específico mediante su ID “/api/product/:id”
3. Agregar un nuevo producto “/api/product”,
4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/product/:id”,
5. Eliminar un producto mediante su ID “/api/product/:id”,

Bonus

Al entrar en el endpoint con ruta “/api/products”,  traer los productos que deberán llegar con el price en formato  “$ Valor numérico”

*/

const express = require('express');
const products = require('./p2ModuleArrayObject');
const route = '/api/products/';

const app = express();

app.get(route,(req, res) => {
    res.send(products);
});

app.get('/api/products/:id',(req, res) => {
    let idProduct = req.params.id;
    let p = products.find(e => e.id === idProduct);
    res.send(p);
});

app.post('api/products/',(req, res) => {
    let newP = {
        name: 'Ipad',
        price: 100000,
        quantity: 2,
        colors: [ 'spacegray', 'white' ],
        id:20
    }
    res.send(idProduct);
});

app.listen(8084,() =>  {
    console.log("servidor corriendo 8084");
})
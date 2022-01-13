let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] }
]

let addIds = (products) => {
    let idx = 1;
    for (let index = 0; index < products.length; index++) {
        products[index].id = idx;
        idx++;
    }
    return JSON.stringify(products);
}
let productsIds = addIds(products);
console.log(`Estos todos los productos con ID ${productsIds}`);

let printNames = (products) => {
    for (const idx in products) {
        if (Object.hasOwnProperty.call(products[idx], "name")) {
            const element = products[idx];
            console.log(element.name);
        }
    }
}
printNames(products);

let printId3 = (products) => {
    let id3 = products.find(e => e.id === 3);
    console.log(`Item id 3 ` + JSON.stringify(id3));
}
printId3(products);

let findBlack = (products) => {
    for (const idx in products) {
        if (Object.hasOwnProperty.call(products[idx], "colors")) {
            const item = products[idx];
            for (const i in item.colors) {
                if (item.colors[i] == "black") {
                    console.log(`Black items ` + JSON.stringify(item));
                }
            }
        }
    }
}
findBlack(products);

let colorsEmpty = (products) => {
    for (const idx in products) {
        if (Object.hasOwnProperty.call(products[idx], "colors")) {
            const item = products[idx];
            if (!item.colors.length) {
                console.log(item);
            }
        }
    }
}
colorsEmpty(products);

let addNewProduct = (products) => {
    let newP = {
        name : "Dock Station",
        price : 400,
        quantity : 7,
        colors : "black",
    }
    products.push(newP);
    let addedId = addIds(products);
    console.log(products);
}
addNewProduct(products);

let deleteOutStock = (products) => {
    for (const idx in products) {
        if (Object.hasOwnProperty.call(products[idx], "quantity")) {
            const item = products[idx];
            if (!item.quantity){
                products.splice(idx,1);
                console.log(products);
            }
        }
    }
}
deleteOutStock(products);

let sumStock = (products) => {
    let totalQuantityStock = 0;
    for (const idx in products) {
        if (Object.hasOwnProperty.call(products[idx], "quantity")) {
            const item = products[idx];
            totalQuantityStock += item.quantity   
        }
    }console.log(totalQuantityStock);
}
sumStock(products);

let printMajorthat = (products) => {
    let major = 0;
    for (const idx in products) {
        if (Object.hasOwnProperty.call(products[idx], "price")) {
            const item = products[idx];
            item.price > 200 ? console.log(item) : stop = false;
        }
    }
}
printMajorthat(products);

module.exports = products;
function calculatePrice(name, price) {
    var envio = 0;
    if (price > 0 && price <= 2000) {
        envio = 300;
    }
    else if(price >= 2001 && price < 4000) {
        envio = 500;
    }
    else if (price > 4000){
        envio = 700;
    }
    else {
        console.log(`te regalamos en envio`);
    }
    return(console.log(`El producto ${name}, cuesta: ${price}. Su costo de envío es de ${envio}. 
    Por lo tanto, el precio final es de ${price+envio}`));
}
console.log(calculatePrice("Macbook", 2500));
console.log(calculatePrice("Celular", 500));
console.log(calculatePrice("Playstation", 4500));
function presentation(userName) {
    return 'Hola, '+ userName + '!!\nBienvenid@ a nuestra tienda online';
}

alert(presentation(prompt('Ingrese su nombre de usuario')));

const productsInOrder = () => {
    let filterForProducts = prompt('Indique el numero de la opcion que desee para filtrar los productos:\n 1_ Precio\n 2_ Mas vendidos\n 3_ Mas nuevo');

    while (filterForProducts == 2){
        alert('Lo sentimos, por el momento no tenemos ventas, vuelva ingresar otro filtro');
        filterForProducts = prompt('Indique el numero de la opcion que desee para filtrar los productos:\n 1_ Precio\n 2_ Mas vendidos\n 3_ Mas nuevo');
    }

    if (filterForProducts == 1){
        products.sort((a, b) => a.price - b.price);
    } else if(filterForProducts == 3){
        products.sort((a, b) => b.id - a.id);

    }
    shopping();
}

let listStore = '';
let priceDiscount = 0;
let articles = '';
let amount = 0;
let totalArticles = '';
let keepShopping = false;
let totalPrice = 0;

const shopping = () => {
    const list =[];
    products.forEach(item => list.push(item.name + ' $' + item.price));

    do {
        listStore = prompt('Lista de productos: Ingrese el articulo que desee llevarse\n' + list.join('\n')).toUpperCase();
        articles = products.find(items => items.name === listStore);

        while(!articles){
            alert('El producto seleccionado no esta en nuestro catalogo');
            listStore = prompt('Lista de productos: Ingrese el articulo que desee llevarse\n' + list.join('\n')).toUpperCase();
            articles = products.find(items => items.name === listStore);
        }

        amount = parseInt(prompt('Ingrese la cantidad que desee llevar:'));

        while(Number.isNaN(amount)){
            amount = parseInt(prompt('Ingrese la cantidad que desee llevar:'));
        }
        
        totalPrice += articles.price * amount;
        totalArticles += amount + ' ' + listStore + ' por $' + amount*articles.price + '\n';

        keepShopping = confirm('Desea seguir comprando??')

    } while(keepShopping);
    
    discount();
}

const discount = () =>{

    if(totalPrice >= 20000){
        alert('Felicidades tu compra supero los $20000, tenes un descuento del 20%')
        priceDiscount = totalPrice * 0.80;        
    } else if (totalPrice >= 10000){
        alert('Felicidades tu compra supero los $10000, tenes un descuento del 10%')
        priceDiscount = totalPrice * 0.90;        
    } else {
        priceDiscount = totalPrice;
    }

    finalBill();
}


const finalBill = () =>{
    alert('Carrito:\n' + totalArticles + '\n\n      Descuento: $' + (totalPrice-priceDiscount) + '\n\n           Precio total de la compra: $' + priceDiscount);
}

productsInOrder();

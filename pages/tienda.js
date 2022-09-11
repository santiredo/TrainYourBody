function presentation(userName) {
    return 'Hola, '+ userName + '!!\nBienvenid@ a nuestra tienda online';
}

let listStore = '';
let article = '';
let price = 0;
let amount = 0;
let totalArticles = '';
let keepShopping = false;
let totalPrice = 0;

function shopping() {
    listStore = prompt('Ingrese el nombre (en plural) del articulo que desea comprar\n Remeras\n Buzos\n Shorts\n Gorras\n Cinturones\n Medias\n Barras\n Pesas\n Mancuernas').toUpperCase();
    while((listStore <= 0) || (listStore > 9)){
        listStore = prompt('Ingrese el nombre del articulo que desea comprar\n Remeras\n Buzos\n Shorts\n Gorras\n Cinturones\n Medias\n Barras\n Pesas\n Mancuernas').toUpperCase();
    }
    
    amount = Number(prompt('Cuant@s desea llevar?'));
    while(amount == ''){
        amount = Number(prompt('Cuant@s desea llevar?'));
    }

    switch (listStore){
    case 'REMERAS':
        article = 'Remeras';
        price = 1000;
        break;
    case 'BUZOS':
        article = 'Buzo';
        price = 2500;
        break;
    case 'SHORTS':
        article = 'Shorts';
        price = 1500;
        break;
    case 'GORRAS':
        article = 'Gorras';
        price = 850;
        break;
    case 'CINTURONES':
        article = 'Cinturones';
        price = 1800;
        break;
    case 'MEDIAS':
        article = 'Medias';
        price = 600;
        break;
    case 'BARRAS':
        article = 'Barras';
        price = 5000;
        break;
    case 'PESAS':
        article = 'Pesas';
        price = 3000;
        break;
    case 'MANCUERNAS':
        article = 'Mancuernas';
        price = 2850;
        break;
    default:
        alert('Usted ingreso alguno de los datos incorrectamente');
        buying();
    }

    totalArticles += amount + ' ' + listStore + ' por $' + amount*price + '\n';
    totalPrice += amount*price;

    keepShopping = confirm('Queres agregar otro articulo al carrito?');
}

function bill(){
    return 'Carrito:\n' + totalArticles + '\n\n                 Precio total de la compra: $' + totalPrice;
}

alert(presentation(prompt('Ingrese su nombre de usuario')));

do {
    shopping();
} while(keepShopping)

alert(bill());
alert('Gracias por confiar en nosotros, que tenga un buen dia!')
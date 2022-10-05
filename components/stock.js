
const clothes = [
    {
        id: 1,
        name: "REMERAS",
        specificName: "Remera gris",
        price: 1000,
        size: "Talle: Oversize M",
        description: "Remeras oversize con diseños super originales",
        img: "../tienda/remera_gris.png",
        stock:1
    },
    {
        id: 2,
        name: "BUZOS",
        specificName: "Buzo azul",
        price: 2500,
        size: "Talle: Oversize M",
        description: "Buzos oversize, los mas comodos y estilosos",
        img: "../tienda/buzo_azul.png",
        stock:1
    },
    {
        id: 3,
        name: "SHORTS",
        specificName: "Short negro",
        price: 1500,
        size: "Talle: M",
        description: "Shorts ideales para tus entrenamientos",
        img: "../tienda/short_negro.png",
        stock:1
    },    
];

const accessories = [
    {
        id: 4,
        name: "GORRAS",
        specificName: "Gorra negra",
        price: 850,
        size: "Unico talle",
        description: "Gorras clasicas para llevar durante tus entrenamientos",
        img: "../tienda/gorra_negra.png",
        stock:1
    },
    {
        id: 5,
        name: "CINTURONES",
        specificName: "Cinturon de powerlifting",
        price: 1800,
        size: "Unico talle",
        description: "Cinturones de powerlifting, ajustables a tu medida",
        img: "../tienda/cinturon_azul.png",
        stock:1
    },
    {
        id: 6,
        name: "MEDIAS",
        specificName: "Medias azules 3/4",
        price: 600,
        size: "Medida: 3/4",
        description: "Medias 3/4 para que te acompañen en tus entrenamientos",
        img: "../tienda/medias_azules.png",
        stock:1
    },
];

const elements = [
    {
        id: 7,
        name: "BARRAS",
        specificName: "Barra olimpica",
        price: 5000,
        size: '20kg',
        description: "Barras olimpicas ideales para tu gimnasio",
        img: "../tienda/barra_20k.png",
        stock:1
    },
    {
        id: 8,
        name: "DISCOS",
        specificName: "Disco olimpico",
        price: 3000,
        size: '10kg',
        description: "Discos olimpicas para llevar con la barra",
        img: "../tienda/disco_10k.png",
        stock:1
    },
    {
        id: 9,
        name: "MANCUERNAS",
        specificName: "Mancuerna hexagonal",
        price: 2500,
        size: '15kg',
        description: "Mancuernas para completar tu set de barras y pesas",
        img: "../tienda/mancuerna_15k.png",
        stock:1
    },
];

const products = clothes.concat(accessories, elements);



const allClothes = [
    {
        id: 1,
        name: "REMERAS",
        specificName: "Remera gris",
        price: 1000,
        size: "Talle: Oversize M",
        description: "Remeras oversize con diseños super originales",
        img: "../tienda/remera_gris.png",
        stock:1
    },
    {
        id: 10,
        name: "REMERAS",
        specificName: "Remera femenina",
        price: 1000,
        size: "Talle: Oversize M",
        description: "Remeras oversize con diseños super originales",
        img: "../tienda/remera_mujer.png",
        stock:1
    },
    {
        id: 11,
        name: "REMERAS",
        specificName: "Camiseta liverpool",
        price: 1000,
        size: "Talle: M",
        description: "Remeras oversize con diseños super originales",
        img: "../tienda/remera_futbol.png",
        stock:1
    },
    {
        id: 2,
        name: "BUZOS",
        specificName: "Buzo azul",
        price: 2500,
        size: "Talle: Oversize M",
        description: "Buzos oversize, los mas comodos y estilosos",
        img: "../tienda/buzo_azul.png",
        stock:1
    },
    {
        id: 12,
        name: "BUZOS",
        specificName: "Buzo gris",
        price: 2500,
        size: "Talle: Oversize M",
        description: "Buzos oversize, los mas comodos y estilosos",
        img: "../tienda/buzo_gris.png",
        stock:1
    },
    {
        id: 13,
        name: "BUZOS",
        specificName: "Buzo estudiantes",
        price: 2500,
        size: "Talle: M",
        description: "Buzos oversize, los mas comodos y estilosos",
        img: "../tienda/buzo_deportivo.png",
        stock:1
    },
    {
        id: 3,
        name: "SHORTS",
        specificName: "Short negro",
        price: 1500,
        size: "Talle: M",
        description: "Shorts ideales para tus entrenamientos",
        img: "../tienda/short_negro.png",
        stock:1
    },
    {
        id: 14,
        name: "SHORTS",
        specificName: "Short blanco",
        price: 1500,
        size: "Talle: M",
        description: "Shorts ideales para tus entrenamientos",
        img: "../tienda/short_blanco.png",
        stock:1
    },
    {
        id: 15,
        name: "SHORTS",
        specificName: "Short deportivo",
        price: 1500,
        size: "Talle: M",
        description: "Shorts ideales para tus entrenamientos",
        img: "../tienda/short_deportivo.png",
        stock:1
    },
];

const allAccessories = [
    {
        id: 4,
        name: "GORRAS",
        specificName: "Gorra negra",
        price: 850,
        size: "Unico talle",
        description: "Gorras clasicas para llevar durante tus entrenamientos",
        img: "../tienda/gorra_negra.png",
        stock:1
    },
    {
        id: 16,
        name: "GORRAS",
        specificName: "Gorra blanca",
        price: 850,
        size: "Unico talle",
        description: "Gorras clasicas para llevar durante tus entrenamientos",
        img: "../tienda/gorra_blanca.png",
        stock:1
    },
    {
        id: 17,
        name: "GORRAS",
        specificName: "Gorra turquesa",
        price: 850,
        size: "Unico talle",
        description: "Gorras clasicas para llevar durante tus entrenamientos",
        img: "../tienda/gorra_turquesa.png",
        stock:1
    },
    {
        id: 5,
        name: "CINTURONES",
        specificName: "Cinturon de powerlifting",
        price: 1800,
        size: "Unico talle",
        description: "Cinturones de powerlifting, ajustables a tu medida",
        img: "../tienda/cinturon_azul.png",
        stock:1
    },
    {
        id: 18,
        name: "CINTURONES",
        specificName: "Cinturon de powerlifting",
        price: 1800,
        size: "Unico talle",
        description: "Cinturones de powerlifting, ajustables a tu medida",
        img: "../tienda/cinturon_marron.png",
        stock:1
    },
    {
        id: 19,
        name: "CINTURONES",
        specificName: "Cinturon de powerlifting",
        price: 1800,
        size: "Unico talle",
        description: "Cinturones de powerlifting, ajustables a tu medida",
        img: "../tienda/cinturon_negro.png",
        stock:1
    },
    {
        id: 6,
        name: "MEDIAS",
        specificName: "Medias negras 3/4",
        price: 600,
        size: "Medida: 3/4",
        description: "Medias 3/4 para que te acompañen en tus entrenamientos",
        img: "../tienda/medias_negras.png",
        stock:1
    },
    {
        id: 20,
        name: "MEDIAS",
        specificName: "Medias azules 3/4",
        price: 600,
        size: "Medida: 3/4",
        description: "Medias 3/4 para que te acompañen en tus entrenamientos",
        img: "../tienda/medias_azules.png",
        stock:1
    },
    {
        id: 21,
        name: "MEDIAS",
        specificName: "Medias blancas 3/4",
        price: 600,
        size: "Medida: 3/4",
        description: "Medias 3/4 para que te acompañen en tus entrenamientos",
        img: "../tienda/medias_blancas.png",
        stock:1
    },
];

const allElements = [
    {
        id: 7,
        name: "BARRAS",
        specificName: "Barra olimpica",
        price: 5000,
        size: '20kg',
        description: "Barras olimpicas de 20kg ideales para tu gimnasio",
        img: "../tienda/barra_20k.png",
        stock:1
    },
    {
        id: 22,
        name: "BARRAS",
        specificName: "Barra olimpica",
        price: 4000,
        size: '10kg',
        description: "Barras olimpicas ideales para tu gimnasio",
        img: "../tienda/barra_10k.png",
        stock:1
    },
    {
        id: 8,
        name: "DISCOS",
        specificName: "Disco olimpico",
        price: 3000,
        size: '5kg',
        description: "Discos olimpicas para llevar con la barra",
        img: "../tienda/disco_5k.png",
        stock:1
    },
    {
        id: 23,
        name: "DISCOS",
        specificName: "Disco olimpico",
        price: 3000,
        size: '10kg',
        description: "Discos olimpicas para llevar con la barra",
        img: "../tienda/disco_10k.png",
        stock:1
    },
    {
        id: 24,
        name: "DISCOS",
        specificName: "Disco olimpico",
        price: 3000,
        size: '15kg',
        description: "Pesas olimpicas para llevar con la barra",
        img: "../tienda/disco_15k.png",
        stock:1
    },
    {
        id: 25,
        name: "DISCOS",
        specificName: "Disco olimpico de 10kg",
        price: 3000,
        size: '20kg',
        description: "Pesas olimpicas para llevar con la barra",
        img: "../tienda/disco_20k.png",
        stock:1
    },
    {
        id: 9,
        name: "MANCUERNAS",
        specificName: "Mancuerna hexagonal",
        price: 2500,
        size: '5kg',
        description: "Mancuernas para completar tu set de barras y pesas",
        img: "../tienda/mancuerna_5k.png",
        stock:1
    },
    {
        id: 26,
        name: "MANCUERNAS",
        specificName: "Mancuerna hexagonal",
        price: 2500,
        size: '10kg',
        description: "Mancuernas para completar tu set de barras y pesas",
        img: "../tienda/mancuerna_10k.png",
        stock:1
    },
    {
        id: 27,
        name: "MANCUERNAS",
        specificName: "Mancuerna hexagonal",
        price: 2500,
        size: '15kg',
        description: "Mancuernas para completar tu set de barras y pesas",
        img: "../tienda/mancuerna_15k.png",
        stock:1
    },
];

const allProducts = allClothes.concat(allAccessories, allElements);

export {allProducts, allClothes, allAccessories, allElements,products, clothes, accessories, elements};
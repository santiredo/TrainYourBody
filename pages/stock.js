
const clothes = [
    {
        id: 1,
        name: "REMERAS",
        price: 1000,
        size: "Oversize M",
        description: "Remeras oversize con diseños super originales",
        img: "../tienda/remera_gris.png",
        quantity:1
    },
    {
        id: 2,
        name: "BUZOS",
        price: 2500,
        size: "Oversize M",
        description: "Buzos oversize, los mas comodos y estilosos",
        img: "../tienda/buzo_azul.png",
        quantity:1
    },
    {
        id: 3,
        name: "SHORTS",
        price: 1500,
        size: "M",
        description: "Shorts ideales para tus entrenamientos",
        img: "../tienda/short_negro.png",
        quantity:1
    },
    
    
]

const accessories = [
    {
        id: 4,
        name: "GORRAS",
        price: 850,
        size: "Unico talle",
        description: "Las mejores gorras clasicas para vos",
        img: "../tienda/remera_blanca.jpg",
        quantity:1
    },
    {
        id: 5,
        name: "CINTURONES",
        price: 1800,
        size: "Unico talle",
        description: "Cinturones de powerlifting, ajustables a tu medida",
        img: "../tienda/remera_blanca.jpg",
        quantity:1
    },
    {
        id: 6,
        name: "MEDIAS",
        price: 600,
        size: "3/4",
        description: "Medias 3/4 super estilosas para que te acompañen en tus entrenamientos, y porque no en tu dia a dia",
        img: "../tienda/remera_blanca.jpg",
        quantity:1
    },
]

const elements = [
    {
        id: 7,
        name: "BARRAS",
        price: 5000,
        size: '20kg',
        description: "Barras olimpicas de 20kg ideales para tu gimnasio",
        img: "../tienda/remera_blanca.jpg",
        quantity:1
    },
    {
        id: 8,
        name: "PESAS",
        price: 3000,
        size: '10kg',
        description: "Pesas olimpicas para llevar con la barra",
        img: "../tienda/remera_blanca.jpg",
        quantity:1
    },
    {
        id: 9,
        name: "MANCUERNAS",
        price: 2500,
        size: '15kg ',
        description: "Mancuernas para completar tu set de barras y pesas",
        img: "../tienda/remera_blanca.jpg",
        quantity:1
    },
];


const products = clothes.concat(accessories, elements);
import { validateRepeatedElement } from "./cart.js";


const showClothes = (clothes) => {
    const onlyClothes = document.querySelector(".tienda__main-section-clothes");

    clothes.forEach(item =>{
        const article = document.createElement('article');
        article.classList.add('ropaPortada');
        
        article.innerHTML = `
            <img src="${item.img}" width=128px height=141.2px>
            <div class="card-content">
            <h4>${item.name}</h4>
                <p>${item.description}</p>
                <p>${item.size}</p>
                <p>$ ${item.price}</p>
            </div>
        `;

        onlyClothes.appendChild(article);
    });
}

const showAccessories = (accessories) =>{

    const onlyAccessories = document.querySelector(".tienda__main-section-accessories");

    accessories.forEach(accessorie =>{
        let article = document.createElement('article');
        article.classList.add('accesoriosPortada');
        
        article.innerHTML = `
            <img src="${accessorie.img}" width=120px height=135px>
            <div class="card-content">
            <h4>${accessorie.name}</h4>
                <p>${accessorie.description}</p>
                <p>${accessorie.size}</p>
                <p>$ ${accessorie.price}</p>
            </div>
        `;

        onlyAccessories.appendChild(article);

    });
}

const showElements = (elements) => {
    const onlyElements = document.querySelector(".tienda__main-section-elements");

    elements.forEach(element =>{
        let article = document.createElement('article');
        article.classList.add('elementosPortada');
        
        article.innerHTML = `
            <img src="${element.img}" width=135px height=135px>
            <div class="card-content">
            <h4>${element.name}</h4>
                <p>${element.description}</p>
                <p>${element.size}</p>
                <p>$ ${element.price}</p>
            </div>
        `;

        onlyElements.appendChild(article);

    });
};



const showAllClothes = (allClothes) => {
    let clotheSection = document.querySelector(".clothes-section");

    let div = document.createElement('div');
    div.classList.add('ropaEnVenta');

    clotheSection.append(div)

    allClothes.forEach(element =>{
        let article = document.createElement('article');
        article.classList.add('articulos_en_venta');

        article.innerHTML = `
            <img src="${element.img}" width=135px height=135px>
            <div>
            <h4>${element.specificName}</h4>
                <p>${element.size}</p>
                <p>$ ${element.price}</p>
                <button id="button${element.id}">Agregar al carrito</button>
            </div>
        `
        div.append(article);


        const buttonAddToCart = document.getElementById(`button${element.id}`);

        buttonAddToCart.addEventListener('click', () => {
            validateRepeatedElement(element.id);
        });
    });
}


const showAllAccessories = (allAccessories) => {
    let accessorieSection = document.querySelector(".accessories-section");

    let div = document.createElement('div');
    div.classList.add('accesoriosEnVenta');

    accessorieSection.append(div)

    allAccessories.forEach(element =>{
        let article = document.createElement('article');
        article.classList.add('articulos_en_venta');

        article.innerHTML = `
            <img src="${element.img}" width=135px height=135px>
            <div>
            <h4>${element.specificName}</h4>
                <p>${element.size}</p>
                <p>$ ${element.price}</p>
                <button id="button${element.id}">Agregar al carrito</button>
            </div>
        `
        div.append(article);


        const buttonAddToCart = document.getElementById(`button${element.id}`);

        buttonAddToCart.addEventListener('click', () => {
            validateRepeatedElement(element.id);
        });
    });
}


const showAllElements = (allElements) => {
    let elementSection = document.querySelector(".elements-section");

    let div = document.createElement('div');
    div.classList.add('elementosEnVenta');

    elementSection.append(div)

    allElements.forEach(element =>{
        let article = document.createElement('article');
        article.classList.add('articulos_en_venta');

        article.innerHTML = `
            <img src="${element.img}" width=135px height=135px>
            <div>
            <h4>${element.specificName}</h4>
                <p>${element.size}</p>
                <p>$ ${element.price}</p>
                <button id="button${element.id}">Agregar al carrito</button>
            </div>
        `
        div.append(article);


        const buttonAddToCart = document.getElementById(`button${element.id}`);

        buttonAddToCart.addEventListener('click', () => {
            validateRepeatedElement(element.id);
        });
    });
    
}



function mostrandoLaRopa() {
    const ropaEnVenta = document.querySelector(".ropaEnVenta");
    const showRopaEnVenta = document.querySelector(".verMasRopa");
    const noMorePortada = document.querySelector(".tienda__main-section-clothes");

    showRopaEnVenta.addEventListener('click', () => {
        ropaEnVenta.classList.toggle('ropaEnVentaActiv');
        noMorePortada.classList.toggle('noMorePortada');
    });
}


function mostrandoLosAccesorios() {
    const accesoriosEnVenta = document.querySelector(".accesoriosEnVenta");
    const showAccesoriosEnVenta = document.querySelector(".verMasAccesorios");
    const noMorePortada = document.querySelector(".tienda__main-section-accessories");

    showAccesoriosEnVenta.addEventListener('click', () => {
        accesoriosEnVenta.classList.toggle('accesoriosEnVentaActiv');
        noMorePortada.classList.toggle('noMorePortada');
    });
}


function mostrandoLosElementos() {
    const elementosEnVenta = document.querySelector(".elementosEnVenta");
    const showElementosEnVenta = document.querySelector(".verMasElementos");
    const noMorePortada = document.querySelector(".tienda__main-section-elements");

    showElementosEnVenta.addEventListener('click', () => {
        elementosEnVenta.classList.toggle('elementosEnVentaActiv');
        noMorePortada.classList.toggle('noMorePortada');
    });
}


export {showClothes, showAccessories, showElements, showAllClothes, showAllAccessories, showAllElements, mostrandoLaRopa, mostrandoLosAccesorios, mostrandoLosElementos}

import { validateRepeatedElement } from "./cart.js";
import { allClothes, allAccessories, allElements } from "./stock.js";

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
showAllClothes(allClothes);



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
showAllAccessories(allAccessories);



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
showAllElements(allElements);



function mostrandoLaRopa() {
    const ropaEnVenta = document.querySelector(".ropaEnVenta");
    const showRopaEnVenta = document.querySelector(".verMasRopa");
    const noMorePortada = document.querySelector(".tienda__main-section-clothes");

    showRopaEnVenta.addEventListener('click', () => {
        ropaEnVenta.classList.toggle('ropaEnVentaActiv');
        noMorePortada.classList.toggle('noMorePortada');
    });
}
mostrandoLaRopa();



function mostrandoLosAccesorios() {
    const accesoriosEnVenta = document.querySelector(".accesoriosEnVenta");
    const showAccesoriosEnVenta = document.querySelector(".verMasAccesorios");
    const noMorePortada = document.querySelector(".tienda__main-section-accessories");

    showAccesoriosEnVenta.addEventListener('click', () => {
        accesoriosEnVenta.classList.toggle('accesoriosEnVentaActiv');
        noMorePortada.classList.toggle('noMorePortada');
    });
}
mostrandoLosAccesorios();



function mostrandoLosElementos() {
    const elementosEnVenta = document.querySelector(".elementosEnVenta");
    const showElementosEnVenta = document.querySelector(".verMasElementos");
    const noMorePortada = document.querySelector(".tienda__main-section-elements");

    showElementosEnVenta.addEventListener('click', () => {
        elementosEnVenta.classList.toggle('elementosEnVentaActiv');
        noMorePortada.classList.toggle('noMorePortada');
    });
}
mostrandoLosElementos();




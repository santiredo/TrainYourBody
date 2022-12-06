import { validateRepeatedElement } from "./cart.js";
import { getAccessories, getClothes, getElements } from "./getProducts.js";


const showClothes = async () => {
    const onlyClothes = document.querySelector(".tienda__main-section-clothes");

    const clothes = await getClothes();

    clothes.forEach(element =>{
        let article = document.createElement('article');
        article.classList.add('articulos_en_venta');

        article.innerHTML = `
            <img src="${element.img}" width=135px height=135px>
            <div>
            <h4>${element.specificName}</h4>
                <p>${element.size}</p>
                <p>$ ${element.price}</p>
                <button id="button${element.id}" class="addToCartButton">Agregar al carrito</button>
            </div>
        `;

        onlyClothes.appendChild(article);

        const buttonAddToCart = document.getElementById(`button${element.id}`);

        buttonAddToCart.addEventListener('click', () => {
            validateRepeatedElement(element.id);

            Swal.fire({
                title: 'Genial!',
                text: 'Producto añadido al carrito',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            });
        });
    });
}

const showAccessories = async () =>{
    const onlyAccessories = document.querySelector(".tienda__main-section-accessories");

    const accessories = await getAccessories();

    accessories.forEach(element =>{
        let article = document.createElement('article');
        article.classList.add('articulos_en_venta');

        article.innerHTML = `
            <img src="${element.img}" width=135px height=135px>
            <div>
            <h4>${element.specificName}</h4>
                <p>${element.size}</p>
                <p>$ ${element.price}</p>
                <button id="button${element.id}" class="addToCartButton">Agregar al carrito</button>
            </div>
        `;

        onlyAccessories.appendChild(article);

        const buttonAddToCart = document.getElementById(`button${element.id}`);

        buttonAddToCart.addEventListener('click', () => {
            validateRepeatedElement(element.id);
            
            Swal.fire({
                title: 'Genial!',
                text: 'Producto añadido al carrito',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            });
        });

    });
}

const showElements = async () => {
    const onlyElements = document.querySelector(".tienda__main-section-elements");

    const elements = await getElements();

    elements.forEach(element =>{
        let article = document.createElement('article');
        article.classList.add('articulos_en_venta');

        article.innerHTML = `
            <img src="${element.img}" width=135px height=135px>
            <div>
            <h4>${element.specificName}</h4>
                <p>${element.size}</p>
                <p>$ ${element.price}</p>
                <button id="button${element.id}" class="addToCartButton">Agregar al carrito</button>
            </div>
        `;

        onlyElements.appendChild(article);

        const buttonAddToCart = document.getElementById(`button${element.id}`);

        buttonAddToCart.addEventListener('click', () => {
            validateRepeatedElement(element.id);

            Swal.fire({
                title: 'Genial',
                text: 'Producto añadido al carrito',
                icon: 'success',
                showConfirmButton: false,
                timer: 1300
            });
        });

    });
};

export {showClothes, showAccessories, showElements }

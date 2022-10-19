import { allProducts } from '../components/stock.js'
import { updateTotalCart } from '../components/updateCart.js';
import { getCartInStorage } from '../components/storageCart.js';
/* import { operadorAvanzado } from '../components/operadoresAvanzados.js'
 */

let cart = /* JSON.parse(localStorage.getItem('cart')) || */ [];

const validateRepeatedElement = (elementId) => {

    // ACA AGREGUE UN OPERADOR AVANZADO
    localStorage.getItem('cart') && (cart = getCartInStorage());

    const repeatedElement = cart.find(element => element.id === elementId);

    if (repeatedElement) {
        repeatedElement.amount++;

        let amountElement = document.getElementById(`amount${repeatedElement.id}`);
        amountElement.innerText = `${repeatedElement.amount}`;
        updateTotalCart(cart);
    } else {
        addToCart(elementId);
    }
}
const addToCart = (elementId) =>{
    const cartContainer = document.getElementById('cartContainer');
    let element = allProducts.find( element => element.id == elementId);
    cart.push(element);

    const div = document.createElement('div')
    div.classList.add('productAddedToCart')
    div.innerHTML = `
        <img src="${element.img}" width=16px height=16px>
        <p>${element.specificName}</p>
        <p id="amount${element.id}">${element.amount}</p>
        <p>${element.price}</p>
        <button id="eliminar${element.id}" value="${element.id}" class="delete-button">
            x
        </button>
    `;
    cartContainer.append(div);
    updateTotalCart(cart);
    return element;
}

const showAllItemsInCart = (cart) => {
    const cartContainer = document.getElementById('cartContainer');

    cartContainer.innerHTML = '';
    cart.forEach(element => {
        const div = document.createElement('div')
        div.classList.add('productAddedToCart')
        div.innerHTML = `
            <img src="${element.img}" width=16px height=16px>
            <p>${element.specificName}</p>
            <p id="amount${element.id}">${element.amount}</p>
            <p>${element.price}</p>
            <button id="eliminar${element.id}" value="${element.id}" class="delete-button">
                x
            </button>
        `;
        cartContainer.append(div);
    });   
}

const deleteCartItems = (elementId) => {
    const cartStorage = getCartInStorage();
    const updatedCart = cartStorage.filter(element => element.id != elementId)

    updateTotalCart(updatedCart);
    showAllItemsInCart(updatedCart);
}



export {addToCart, validateRepeatedElement, showAllItemsInCart, deleteCartItems, cart};

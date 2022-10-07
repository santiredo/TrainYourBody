import { deleteElementInCart } from "../components/cart.js";

const cartSection = document.querySelector('.cartSection');
const openCart = document.getElementById('openCart');
const closeCart = document.getElementById('closeCart');
const cartContainer = document.getElementById('cartContainer')

openCart.addEventListener('click', () =>{
    cartSection.classList.toggle('cartSectionActive');
});

closeCart.addEventListener('click', () =>{
    cartSection.classList.remove('cartSectionActive');
});

cartContainer.addEventListener('click', (e) => {
    e.stopPropagation();

    if(e.target.classList.contains('delete-button')){
        deleteElementInCart(e.target.value);       
    }

    console.log(e.target.value);
});
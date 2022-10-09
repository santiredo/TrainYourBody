import { deleteCartItems } from "../components/cart.js";

const cartSection = document.querySelector('.cartSection');
const openCart = document.getElementById('openCart');
const closeCart = document.getElementById('closeCart');
/* const deleteButton = document.querySelector(`.delete${element.id}`)
 */
openCart.addEventListener('click', () =>{
    cartSection.classList.toggle('cartSectionActive');
});

closeCart.addEventListener('click', () =>{
    cartSection.classList.remove('cartSectionActive');
});

cartSection.addEventListener('click', (e) =>{
    e.stopPropagation();

    if(e.target.classList.contains(`delete-button`)){
        deleteCartItems(e.target.value);
    }

    console.log(e.target.value);

});


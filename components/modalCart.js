const cartSection = document.querySelector('.cartSection');
const openCart = document.getElementById('openCart');
const closeCart = document.getElementById('closeCart');

openCart.addEventListener('click', () =>{
    cartSection.classList.toggle('cartSectionActive');
});

closeCart.addEventListener('click', () =>{
    cartSection.classList.remove('cartSectionActive');
})
import { saveCartInStorage, getCartInStorage } from "../components/storageCart.js";


const updateTotalCart = (cart) => {
    const totalAmount = cart.reduce((acc, element) => acc + element.amount, 0);
    const totalPurchase = cart.reduce((acc, element) => acc + (element.price * element.amount), 0);

    showTotalCart(totalAmount, totalPurchase);
    saveCartInStorage(cart);
    getCartInStorage(cart);
};

const showTotalCart = (totalAmount, totalPurchase) => {
    const cartCounter = document.getElementById('cartCounter');
    const totalPrice = document.getElementById('totalPrice');

    cartCounter.innerText = totalAmount;
    totalPrice.innerText = totalPurchase;
};

export {updateTotalCart};

const updateTotalCart = (cart) => {
    const totalStock = cart.reduce((acc, element) => acc + element.stock, 0);
    const totalPurchase = cart.reduce((acc, element) => acc + (element.price * element.stock), 0);

    showTotalCart(totalStock, totalPurchase);
};

const showTotalCart = (totalStock, totalPurchase) => {
    const cartCounter = document.getElementById('cartCounter');
    const totalPrice = document.getElementById('totalPrice');

    cartCounter.innerText = totalStock;
    totalPrice.innerText = totalPurchase;
};

export {updateTotalCart}
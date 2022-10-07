
const saveCartInStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const getCartInStorage = () => {
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
    return cartStorage;
};

export {saveCartInStorage, getCartInStorage};

const shoppingCart = () => {
    const cartSection = document.querySelector('.cartSection');

    let cartDiv = document.createElement('div');
    cartDiv.classList.add('cart');

    cartDiv.innerHTML = `
        <h3>Carrito</h3>
        <div class="cartItems"></div>
        `

    cartSection.appendChild(cartDiv);
}
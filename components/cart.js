let cart = [];

const validateRepeatedElement = (elementId) => {
    const repeatedElement = cart.find(element => element.id === elementId);

    if (repeatedElement) {
        repeatedElement.stock++;
        
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
        <p id="stock${element.id}">${element.stock}</p>
        <p>${element.price}</p>
        <button id="eliminar${element.id}" value="${element.id}">X</button>
    `;
    cartContainer.appendChild(div);
}
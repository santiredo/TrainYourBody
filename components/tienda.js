import { mostrandoLaRopa, mostrandoLosAccesorios, mostrandoLosElementos, showAccessories, showClothes, showElements } from "../components/articles.js";
import { accessories, clothes, elements } from "../components/stock.js";
import { showAllClothes, showAllAccessories, showAllElements } from "../components/articles.js";
import { getCartInStorage } from "../components/storageCart.js";
import { showAllItemsInCart } from "../components/cart.js";
import { updateTotalCart } from "../components/updateCart.js";
        


document.addEventListener('DOMContentLoaded', () => {
    showClothes(clothes);
    showAccessories(accessories);
    showElements(elements);
    mostrandoLaRopa();
    mostrandoLosAccesorios();
    mostrandoLosElementos();
    showAllClothes();
    showAllAccessories();
    showAllElements();
    

    // Aca agregue un operador avanzado
    function operadorAvanzado2() {
        const cart = getCartInStorage();

        showAllItemsInCart(cart);
        updateTotalCart(cart);
    }

    localStorage.getItem('cart') && operadorAvanzado2(); 
});



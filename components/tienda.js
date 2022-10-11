import { mostrandoLaRopa, mostrandoLosAccesorios, mostrandoLosElementos, showAccessories, showClothes, showElements } from "../components/articles.js";
import { accessories, clothes, elements, allAccessories, allClothes, allElements } from "../components/stock.js";
import { showAllClothes, showAllAccessories, showAllElements } from "../components/articles.js";
import { getCartInStorage } from "../components/storageCart.js";
import { showAllItemsInCart } from "../components/cart.js";
import { updateTotalCart } from "../components/updateCart.js";
        


document.addEventListener('DOMContentLoaded', () => {
    showClothes(clothes);
    showAccessories(accessories);
    showElements(elements);
    showAllClothes(allClothes);
    showAllAccessories(allAccessories);
    showAllElements(allElements);
    mostrandoLaRopa();
    mostrandoLosAccesorios();
    mostrandoLosElementos();

    // Aca agregue un operador avanzado
    function operadorAvanzado2() {
        const cart = getCartInStorage();

        showAllItemsInCart(cart);
        updateTotalCart(cart);
    }

    localStorage.getItem('cart') ? operadorAvanzado2 : cart = []
});



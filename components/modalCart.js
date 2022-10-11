import { deleteCartItems } from "../components/cart.js";

const cartSection = document.querySelector('.cartSection');
const openCart = document.getElementById('openCart');
const closeCart = document.getElementById('closeCart');
const deleteButton = document.querySelector('.delete-button');

openCart.addEventListener('click', () =>{
    cartSection.classList.toggle('cartSectionActive');
});

closeCart.addEventListener('click', () =>{
    cartSection.classList.remove('cartSectionActive');
});

deleteButton.addEventListener('click', (e) =>{
    e.stopPropagation();

    Swal.fire({
        title: 'Estas seguro?',
        text: 'El producto se eliminara del carrito de compras',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Si, seguro',
        denyButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed) {
            deleteItems();
            Swal.fire({
                title: 'Producto eliminado',
                text: 'El producto ha sido eliminado del carrito de compras',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
        };
    });
    
    // OTRO OPERADOR LOGICO AND
    function deleteItems(){
        e.target.classList.contains(`delete-button`) && deleteCartItems(e.target.value);
    }    
});


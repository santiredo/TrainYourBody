const deleteButton = document.querySelector(`delete${element.id}`);

deleteButton.addEventListener('click', () =>{
    deleteCartItems(element.id);
});

const deleteCartItems = (elementId) => {
    const deletedElement = cart.find(element => element.id === elementId);

    if (deletedElement){
        deletedElement.amount--;
        
        let removingElement = cart.indexOf(deletedElement);
        cart.splice(removingElement, 1);
    }
}
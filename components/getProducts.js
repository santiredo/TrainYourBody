const getClothes = async () => {
    try {
        const response = await fetch('../components/data/allClothes.json');
        const dataClothes = await response.json();

        return dataClothes;
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'Hubo un error: ' + error,
            icon: 'Warning',
        });
        console.log('Ha habido un error: ' + error)
    }
}

const getAccessories = async () => {
    try {
        const response = await fetch('../components/data/allAccessories.json');
        const dataAccessories = await response.json();

        return dataAccessories;
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'Hubo un error: ' + error,
            icon: 'Warning',
        });
        console.log('Ha habido un error: ' + error)
    }
}

const getElements = async () => {
    try {
        const response = await fetch('../components/data/allElements.json');
        const dataElements = await response.json();

        return dataElements;
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'Hubo un error: ' + error,
            icon: 'Warning',
        });
        console.log('Ha habido un error: ' + error)
    }
}

export {getAccessories, getClothes, getElements}
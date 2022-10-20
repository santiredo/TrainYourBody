const getClothes = async () => {
    try {
        const clothesResponse = await fetch('../components/data/allClothes.json');
        const dataClothes = await clothesResponse.json();

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
        const acccessoriesResponse = await fetch('../components/data/allAccessories.json');
        const dataAccessories = await acccessoriesResponse.json();

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
        const elementsResponse = await fetch('../components/data/allElements.json');
        const dataElements = await elementsResponse.json();

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
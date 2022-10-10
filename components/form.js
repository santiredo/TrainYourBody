const queries = JSON.parse(localStorage.getItem('queries')) || [];

const taskForm = document.querySelector(".contacto__form");



function gettingValues(){
    const userName = document.getElementById('userName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const doubts = document.getElementById('doubts').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const sportSelection = document.getElementById('sportSelection').value;
    const otherSport = document.getElementById('otherSport').value;

    const query = {
        userName: userName,
        phoneNumber: phoneNumber,
        doubts: doubts,
        surname: surname,
        email: email,
        sportSelection: sportSelection,
        otherSport: otherSport
    }

    queries.push(query);
    storingUserData();
}

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    gettingValues();

    taskForm.reset();

    submitAlert();
});

function storingUserData(){
    localStorage.setItem('queries', JSON.stringify(queries));
}

const submitAlert = () => {
    const doubts = document.getElementById('doubts');
    const userName = document.getElementById('userName');
    const phoneNumber = document.getElementById('phoneNumber');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');

    if ((doubts.value != '') && (userName.value != '') && (phoneNumber.value != '') && (surname.value != '') && (email.value != '')){
        Swal.fire({
            title: 'Gracias!!',
            text: 'Su consulta se ha enviado con exito',
            icon: 'success'
        })
    } else {
        Swal.fire({
            title: 'Error', 
            text: 'Para enviar el formulario debe llenar los campos obligatorios (*)',
            icon: 'warning'
        })
    }
}
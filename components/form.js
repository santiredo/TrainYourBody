
// ACA TOMAMOS LOS DATOS DEL FORMULARIO LOS DEPOSITAMOS EN UN ARRAY QUE MANDAMOS AL LOCALSTORAGE
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

function storingUserData(){
    localStorage.setItem('queries', JSON.stringify(queries));
}

// ACA CREAMOS EL SWEET ALERT PARA EL FORMULARIO
const submitAlert = () => {
    const doubts = document.getElementById('doubts');
    const userName = document.getElementById('userName');
    const phoneNumber = document.getElementById('phoneNumber');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');

    if ((doubts.value == '') || (userName.value == '') || (phoneNumber.value == '') || (surname.value == '') || (email.value == '')){
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

// ACA APLICAMOS UNA API PARA MANDAR LOS DATOS DEL USUARIO A UNA CASILLA DE CORREO ELECTRONICO

const userName = document.getElementById('userName');
const phoneNumber = document.getElementById('phoneNumber');
const doubts = document.getElementById('doubts');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const sportSelection = document.getElementById('sportSelection');
const otherSport = document.getElementById('otherSport');

const sendEmail = async () => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', settings);
    const data = await response.json();
    return data;
}

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    gettingValues();

    taskForm.reset();

    submitAlert();

    const body = {
        service_id: 'service_q7h43kk',
        template_id: 'template_eau5s7g',
        user_id: 'LfuZBxf_bRpCe4wG1',
        template_params: {
            'from_email': email.value,
            'from_name' : userName.value,
            'surname': surname.value,
            'phone_number': phoneNumber.value,
            'sport': sportSelection.value + ' ' + otherSport.value,
            'doubts': doubts.value,
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
    };

    sendEmail(body);
});
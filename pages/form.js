const taskForm = document.querySelector(".contacto__form");
const userNameForm = document.getElementById('userName');
const phoneNumberForm = document.getElementById('phoneNumber');
const doubtsForm = document.getElementById('doubts');
const surnameForm = document.getElementById('surname');
const emailForm = document.getElementById('email');
const sportSelectionForm = document.getElementById('sportSelection');
const otherSportForm = document.getElementById('otherSport');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault;

    const form = new FormData(taskForm);
    const userName = form.get('userName');
    const phoneNumber = form.get('phoneNumber');
    const doubts = form.get('doubts');
    const surname = form.get('surname');
    const email = form.get('email');
    const sportSelection = form.get('sportSelection');
    const otherSport = form.get('otherSport');

    console.log(userName, phoneNumber, doubts, surname, email, sportSelection, otherSport);

});

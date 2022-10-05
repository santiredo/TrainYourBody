const queries = JSON.parse(localStorage.getItem('queries')) || [];

const taskForm = document.querySelector(".contacto__form");

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    gettingValues();

    taskForm.reset();
});

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
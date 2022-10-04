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

    storingUserData();
}

function storingUserData(){
    localStorage.setItem(email.value, userName.value + '\n' + surname.value + '\n' + phoneNumber.value + '\n' + sportSelection.value + '\n' + otherSport.value + '\n' + doubts.value);
}
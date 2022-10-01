const taskForm = document.querySelector(".contacto__form");


taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const doubts = document.getElementById('doubts').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const sportSelection = document.getElementById('sportSelection').value;
    const otherSport = document.getElementById('otherSport').value;

    console.log(userName, surname +'\n'+ email, phoneNumber +'\n'+ sportSelection + otherSport +'\n'+ doubts);

    taskForm.reset();
});

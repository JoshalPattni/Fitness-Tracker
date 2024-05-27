document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'JoshalPoonam' && password === 'Kume') {
        loadData();
        document.getElementById('login').classList.add('hidden');
        document.getElementById('input-data').classList.remove('hidden');
    } else {
        alert('Incorrect username or password!');
    }
});

document.getElementById('save-data').addEventListener('click', function() {
    const data = {
        joshal: {
            weight: document.getElementById('joshal-weight').value,
            rightArm: document.getElementById('joshal-right-arm').value,
            leftArm: document.getElementById('joshal-left-arm').value,
            waist: document.getElementById('joshal-waist').value,
            stomach: document.getElementById('joshal-stomach').value,
            chest: document.getElementById('joshal-chest').value,
            goals: {
                month1: {
                    start: document.getElementById('joshal-month1-start').value,
                    end: document.getElementById('joshal-month1-end').value,
                    weight: document.getElementById('joshal-month1-weight').value,
                    rightArm: document.getElementById('joshal-month1-right-arm').value,
                    leftArm: document.getElementById('joshal-month1-left-arm').value,
                    waist: document.getElementById('joshal-month1-waist').value,
                    stomach: document.getElementById('joshal-month1-stomach').value,
                    chest: document.getElementById('joshal-month1-chest').value
                }
            },
            reward: document.getElementById('joshal-reward').value
        },
        poonam: {
            weight: document.getElementById('poonam-weight').value,
            waist: document.getElementById('poonam-waist').value,
            stomach: document.getElementById('poonam-stomach').value,
            bum: document.getElementById('poonam-bum').value,
            goals: {
                month1: {
                    start: document.getElementById('poonam-month1-start').value,
                    end: document.getElementById('poonam-month1-end').value,
                    weight: document.getElementById('poonam-month1-weight').value,
                    waist: document.getElementById('poonam-month1-waist').value,
                    stomach: document.getElementById('poonam-month1-stomach').value,
                    bum: document.getElementById('poonam-month1-bum').value
                }
            },
            reward: document.getElementById('poonam-reward').value
        }
    };
    localStorage.setItem('fitnessData', JSON.stringify(data));
    calculateScores();
    alert('Data saved successfully!');
});

function loadData() {
    const data = JSON.parse(localStorage.getItem('fitnessData'));
    if (data) {
        document.getElementById('joshal-weight').value = data.joshal.weight;
        document.getElementById('joshal-right-arm').value = data.joshal.rightArm;
        document.getElementById('joshal-left-arm').value = data.joshal.leftArm;
        document.getElementById('joshal-waist').value = data.joshal.waist;
        document.getElementById('joshal-stomach').value = data.joshal.stomach;
        document.getElementById('joshal-chest').value = data.joshal.chest;

        document.getElementById('joshal-month1-start').value = data.joshal.goals.month1.start;
        document.getElementById('joshal-month1-end').value = data.joshal.goals.month1.end;
        document.getElementById('joshal-month1-weight').value = data.joshal.goals.month1.weight;
        document.getElementById('joshal-month1-right-arm').value = data.joshal.goals.month1.rightArm;
        document.getElementById('joshal-month1-left-arm').value = data.joshal.goals.month1.leftArm;
        document.getElementById('joshal-month1-waist').value = data.joshal.goals.month1.waist;
        document.getElementById('joshal-month1-stomach').value = data.joshal.goals.month1.stomach;
        document.getElementById('joshal-month1-chest').value = data.joshal.goals.month1.chest;

        document.getElementById('poonam-weight').value = data.poonam.weight;
        document.getElementById('poonam-waist').value = data.poonam.waist;
        document.getElementById('poonam-stomach').value = data.poonam.stomach;
        document.getElementById('poonam-bum').value = data.poonam.bum;

        document.getElementById('poonam-month1-start').value = data.poonam.goals.month1.start;
        document.getElementById('poonam-month1-end').value = data.poonam.goals.month1.end;
        document.getElementById('poonam-month1-weight').value = data.poonam.goals.month1.weight;
        document.getElementById('poonam-month1-waist').value = data.poonam.goals.month1.waist;
        document.getElementById('poonam-month1-stomach').value = data.poonam.goals.month1.stomach;
        document.getElementById('poonam-month1-bum').value = data.poonam.goals.month1.bum;
    }
}

function calculateScores() {
    const data = JSON.parse(localStorage.getItem('fitnessData'));
    let joshalScore = 0;
    let poonamScore = 0;

    if (data) {
        // Calculate scores for Joshal
        if (data.joshal.weight <= data.joshal.goals.month1.weight) joshalScore++;
        if (data.joshal.rightArm <= data.joshal.goals.month1.rightArm) joshalScore++;
        if (data.joshal.leftArm <= data.joshal.goals.month1.leftArm) joshalScore++;
        if (data.joshal.waist <= data.joshal.goals.month1.waist) joshalScore++;
        if (data.joshal.stomach <= data.joshal.goals.month1.stomach) joshalScore++;
        if (data.joshal.chest <= data.joshal.goals.month1.chest) joshalScore++;

        // Calculate scores for Poonam
        if (data.poonam.weight <= data.poonam.goals.month1.weight) poonamScore++;
        if (data.poonam.waist <= data.poonam.goals.month1.waist) poonamScore++;
        if (data.poonam.stomach <= data.poonam.goals.month1.stomach) poonamScore++;
        if (data.poonam.bum <= data.poonam.goals.month1.bum) poonamScore++;
    }

    document.getElementById('joshal-score').textContent = joshalScore;
    document.getElementById('poonam-score').textContent = poonamScore;
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('fitnessData')) {
        document.getElementById('login').classList.add('hidden');
        document.getElementById('input-data').classList.remove('hidden');
        loadData();
    }
});

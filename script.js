document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
        loadData(username);
        document.getElementById('login').classList.add('hidden');
        document.getElementById('input-data').classList.remove('hidden');
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
                    goal: document.getElementById('joshal-month1-goal').value
                }
                // Add more months as needed
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
                    goal: document.getElementById('poonam-month1-goal').value
                }
                // Add more months as needed
            },
            reward: document.getElementById('poonam-reward').value
        }
    };
    localStorage.setItem('fitnessData', JSON.stringify(data));
    alert('Data saved successfully!');
});

function loadData(username) {
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
        document.getElementById('joshal-month1-goal').value = data.joshal.goals.month1.goal;
        document.getElementById('joshal-reward').value = data.joshal.reward;

        document.getElementById('poonam-weight').value = data.poonam.weight;
        document.getElementById('poonam-waist').value = data.poonam.waist;
        document.getElementById('poonam-stomach').value = data.poonam.stomach;
        document.getElementById('poonam-bum').value = data.poonam.bum;
        document.getElementById('poonam-month1-start').value = data.poonam.goals.month1.start;
        document.getElementById('poonam-month1-end').value = data.poonam.goals.month1.end;
        document.getElementById('poonam-month1-goal').value = data.poonam.goals.month1.goal;
        document.getElementById('poonam-reward').value = data.poonam.reward;
    }
}

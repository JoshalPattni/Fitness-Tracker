// Function to save user data
function saveData() {
    let data = {
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

    // Save data to local storage
    localStorage.setItem('fitnessData', JSON.stringify(data));
    alert('Data saved successfully!');
    updateScores();
}

// Function to update scores based on goals met (placeholder for real implementation)
function updateScores() {
    let joshalScore = parseInt(document.getElementById('joshal-score').textContent, 10);
    let poonamScore = parseInt(document.getElementById('poonam-score').textContent, 10);

    joshalScore++; // Increment scores for demonstration
    poonamScore++;

    document.getElementById('joshal-score').textContent = joshalScore;
    document.getElementById('poonam-score').textContent = poonamScore;
}

// Load data from local storage when the page loads
window.onload = function() {
    const savedData = localStorage.getItem('fitnessData');
    if (savedData) {
        const data = JSON.parse(savedData);
        document.getElementById('joshal-weight').value = data.joshal.weight;
        document.getElementById('joshal-right-arm').value = data.joshal.rightArm;
        document.getElementById('joshal-left-arm').value = data.joshal.leftArm;
        document.getElementById('joshal-waist').value = data.joshal.waist;
        document.getElementById('joshal-stomach').value = data.joshal.stomach;
        document.getElementById('joshal-chest').value = data.joshal.chest;

        document.getElementById('poonam-weight').value = data.poonam.weight;
        document.getElementById('poonam-waist').value = data.poonam.waist;
        document.getElementById('poonam-stomach').value = data.poonam.stomach;
        document.getElementById('poonam-bum').value = data.poonam.bum;
    }
};

// Define variables to store goals for Joshal and Poonam
let joshalGoals = [];
let poonamGoals = [];

// Function to add a goal for either Joshal or Poonam
function addGoal(user) {
    const measurementName = document.getElementById(`${user}-measurement-name`).value;
    const goal = document.getElementById(`${user}-goal`).value;
    const table = document.getElementById(`${user}-goals-table`);

    // Create a new row
    const newRow = table.insertRow();
    const monthCell = newRow.insertCell(0);
    const detailCell = newRow.insertCell(1);
    const metCell = newRow.insertCell(2);

    // Get the current month and year
    const now = new Date();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    // Fill cells with data
    monthCell.textContent = `${month} ${year}`;
    detailCell.textContent = `${measurementName}: ${goal} cm/kg`;
    metCell.innerHTML = `<select onchange="updateScoreCard()"><option value="yes">Yes</option><option value="no">No</option><option value="same">Stayed the same</option></select>`;
    
    // Update the corresponding goals array
    if (user === 'joshal') {
        joshalGoals.push({ measurementName, goal });
    } else {
        poonamGoals.push({ measurementName, goal });
    }
}

// Function to update the score card
function updateScoreCard() {
    const joshalScoreSpan = document.getElementById('joshal-score');
    const poonamScoreSpan = document.getElementById('poonam-score');

    let joshalScore = 0;
    let poonamScore = 0;

    // Iterate through Joshal's goals
    joshalGoals.forEach(goal => {
        const select = document.querySelector('#joshal-goals-table select:last-child');
        if (select.value === 'yes') {
            joshalScore++;
        } else if (select.value === 'no') {
            joshalScore--;
        }
    });

    // Iterate through Poonam's goals
    poonamGoals.forEach(goal => {
        const select = document.querySelector('#poonam-goals-table select:last-child');
        if (select.value === 'yes') {
            poonamScore++;
        } else if (select.value === 'no') {
            poonamScore--;
        }
    });

    //

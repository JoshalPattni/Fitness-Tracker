document.addEventListener('DOMContentLoaded', function() {
    populateGoalsTables();
    loadData();
});

function populateGoalsTables() {
    const joshalTable = document.getElementById('joshal-goals-table');
    const poonamTable = document.getElementById('poonam-goals-table');
    const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'];

    months.forEach((month, index) => {
        // Populate Joshal's goals table
        const joshalRow = joshalTable.insertRow();
        joshalRow.insertCell(0).textContent = month;
        const joshalGoalCell = joshalRow.insertCell(1);
        const joshalGoalInput = document.createElement('input');
        joshalGoalInput.type = 'number';
        joshalGoalInput.placeholder = 'Enter goal';
        joshalGoalInput.classList.add('goal-input');
        joshalGoalCell.appendChild(joshalGoalInput);

        // Add Goal Met? cell for Joshal
        const joshalGoalMetCell = joshalRow.insertCell(2);
        const joshalGoalMetSelect = document.createElement('select');
        joshalGoalMetSelect.innerHTML = '<option value="yes">Yes</option><option value="no">No</option><option value="same">Stayed the same</option>';
        joshalGoalMetCell.appendChild(joshalGoalMetSelect);

        // Add event listener to update score card
        joshalGoalMetSelect.addEventListener('change', function() {
            updateScoreCard();
        });

        // Populate Poonam's goals table
        const poonamRow = poonamTable.insertRow();
        poonamRow.insertCell(0).textContent = month;
        const poonamGoalCell = poonamRow.insertCell(1);
        const poonamGoalInput = document.createElement('input');
        poonamGoalInput.type = 'number';
        poonamGoalInput.placeholder = 'Enter goal';
        poonamGoalInput.classList.add('goal-input');
        poonamGoalCell.appendChild(poonamGoalInput);

        // Add Goal Met? cell for Poonam
        const poonamGoalMetCell = poonamRow.insertCell(2);
        const poonamGoalMetSelect = document.createElement('select');
        poonamGoalMetSelect.innerHTML = '<option value="yes">Yes</option><option value="no">No</option><option value="same">Stayed the same</option>';
        poonamGoalMetCell.appendChild(poonamGoalMetSelect);

        // Add event listener to update score card
        poonamGoalMetSelect.addEventListener('change', function() {
            updateScoreCard();
        });
    });
}

function updateScoreCard() {
    const joshalScoreSpan = document.getElementById('joshal-score');
    const poonamScoreSpan = document.getElementById('poonam-score');

    let joshalScore = 0;
    let poonamScore = 0;

    const joshalGoalMetSelects = document.querySelectorAll('#joshal-goals-table select');
    const poonamGoalMetSelects = document.querySelectorAll('#poonam-goals-table select');

    joshalGoalMetSelects.forEach(select => {
        if (select.value === 'yes') {
            joshalScore++;
        } else if (select.value === 'no') {
            joshalScore--;
        }
    });

    poonamGoalMetSelects.forEach(select => {
        if (select.value === 'yes') {
            poonamScore++;
        } else if (select.value === 'no') {
            poonamScore--;
        }
    });

    joshalScoreSpan.textContent = joshalScore;
    poonamScoreSpan.textContent = poonamScore;
}

function saveData() {
    // Implement saving data functionality here
    console.log("Data saved!");
}

function loadData() {
    // Implement loading data functionality here
    console.log("Data loaded!");
}

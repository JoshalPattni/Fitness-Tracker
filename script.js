document.addEventListener('DOMContentLoaded', function() {
    populateGoalsTables();
    loadData();
});

function populateGoalsTables() {
    const joshalTable = document.getElementById('joshal-goals-table');
    const poonamTable = document.getElementById('poonam-goals-table');
    const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'];
    
    months.forEach((month, index) => {
        const joshalRow = joshalTable.insertRow();
        const joshalMonthCell = joshalRow.insertCell(0);
        joshalMonthCell.textContent = month;

        const joshalGoalCell = joshalRow.insertCell(1);
        const joshalGoalInput = document.createElement('input');
        joshalGoalInput.type = 'number';
        joshalGoalInput.min = '0';
        joshalGoalInput.value = '0';
        joshalGoalCell.appendChild(joshalGoalInput);

        const joshalMetCell = joshalRow.insertCell(2);
        const joshalMetButton = document.createElement('button');
        joshalMetButton.textContent = 'Meet Goal?';
        joshalMetButton.addEventListener('click', function() {
            updateGoalStatus(joshalRow, joshalGoalInput.value, index, 'joshal');
        });
        joshalMetCell.appendChild(joshalMetButton);

        const poonamRow = poonamTable.insertRow();
        const poonamMonthCell = poonamRow.insertCell(0);
        poonamMonthCell.textContent = month;

        const poonamGoalCell = poonamRow.insertCell(1);
        const poonamGoalInput = document.createElement('input');
        poonamGoalInput.type = 'number';
        poonamGoalInput.min = '0';
        poonamGoalInput.value = '0';
        poonamGoalCell.appendChild(poonamGoalInput);

        const poonamMetCell = poonamRow.insertCell(2);
        const poonamMetButton = document.createElement('button');
        poonamMetButton.textContent = 'Meet Goal?';
        poonamMetButton.addEventListener('click', function() {
            updateGoalStatus(poonamRow, poonamGoalInput.value, index, 'poonam');
        });
        poonamMetCell.appendChild(poonamMetButton);
    });
}

function updateGoalStatus(row, goalValue, index, user) {
    const goalCell = row.cells[1];
    const metCell = row.cells[2];
    const currentValue = parseInt(goalCell.firstChild.value);
    if (currentValue === parseInt(goalValue)) {
        row.classList.remove('green', 'red');
        row.classList.add('orange');
        metCell.textContent = 'Stayed the same';
        updateScore(user, 0);
    } else if (currentValue < parseInt(goalValue)) {
        row.classList.remove('red', 'orange');
        row.classList.add('green');
        metCell.textContent = 'Met';
        updateScore(user, 1);
    } else {
        row.classList.remove('green', 'orange');
        row.classList.add('red');
        metCell.textContent = 'Missed';
        updateScore(user, -1);
    }
    saveData(); // Save data after updating goal status
}

function updateScore(user, points) {
    const scoreSpan = document.getElementById(`${user}-score`);
    let currentScore = parseInt(scoreSpan.textContent);
    currentScore += points;
    scoreSpan.textContent = currentScore;
}

function saveData() {
    // Save data to localStorage
    const joshalGoals = [];
    const poonamGoals = [];
    const joshalTable = document.getElementById('joshal-goals-table');
    const poonamTable = document.getElementById('poonam-goals-table');

    // Populate joshal's goals
    for (let i = 1; i < joshalTable.rows.length; i++) {
        const goalValue = joshalTable.rows[i].cells[1].firstChild.value;
        joshalGoals.push(goalValue);
    }

    // Populate poonam's goals
    for (let i = 1; i < poonamTable.rows.length; i++) {
        const goalValue = poonamTable.rows[i].cells[1].firstChild.value;
        poonamGoals.push(goalValue);
    }

    localStorage.setItem('joshalGoals', JSON.stringify(joshalGoals));
    localStorage.setItem('poonamGoals', JSON.stringify(poonamGoals));
}

function loadData() {
    // Load data from localStorage
    const joshalGoals = JSON.parse(localStorage.getItem('joshalGoals'));
    const poonamGoals = JSON.parse(localStorage.getItem('poonamGoals'));
    if (joshalGoals && poonamGoals) {
        const joshalTable = document.getElementById('joshal-goals-table');
        const poonamTable = document.getElementById('poonam-goals-table');

        for (let i = 1; i < joshalTable.rows.length; i++) {
            joshalTable.rows[i].cells[1].firstChild.value = joshalGoals[i - 1];
        }

        for (let i = 1; i < poonamTable.rows.length; i++) {
            poonamTable.rows[i].cells[1].firstChild.value = poonamGoals[i - 1];
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    populateGoalsTables();
});

function populateGoalsTables() {
    const joshalTable = document.getElementById('joshal-goals-table');
    const poonamTable = document.getElementById('poonam-goals-table');
    const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'];
    
    months.forEach(month => {
        const joshalRow = joshalTable.insertRow();
        const joshalMonthCell = joshalRow.insertCell(0);
        joshalMonthCell.textContent = month;

        const joshalGoalCell = joshalRow.insertCell(1);
        const joshalGoalInput = document.createElement('input');
        joshalGoalInput.type = 'text';
        joshalGoalCell.appendChild(joshalGoalInput);

        const joshalMetCell = joshalRow.insertCell(2);
        const joshalMetCheckbox = document.createElement('input');
        joshalMetCheckbox.type = 'checkbox';
        joshalMetCell.appendChild(joshalMetCheckbox);

        const poonamRow = poonamTable.insertRow();
        const poonamMonthCell = poonamRow.insertCell(0);
        poonamMonthCell.textContent = month;

        const poonamGoalCell = poonamRow.insertCell(1);
        const poonamGoalInput = document.createElement('input');
        poonamGoalInput.type = 'text';
        poonamGoalCell.appendChild(poonamGoalInput);

        const poonamMetCell = poonamRow.insertCell(2);
        const poonamMetCheckbox = document.createElement('input');
        poonamMetCheckbox.type = 'checkbox';
        poonamMetCell.appendChild(poonamMetCheckbox);
    });
}

function saveData() {
    // Placeholder for saving data logic
    console.log('Data saved!');
    // This would involve storing data in localStorage or a server-side database.
}

// Function to calculate scores
function updateScores

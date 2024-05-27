document.addEventListener('DOMContentLoaded', function() {
    populateGoalsTable();
});

function populateGoalsTable() {
    const table = document.getElementById('goals-table');
    const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'];
    months.forEach(month => {
        const row = table.insertRow();
        const monthCell = row.insertCell(0);
        monthCell.textContent = month;

        const goalCell = row.insertCell(1);
        const goalInput = document.createElement('input');
        goalInput.type = 'text';
        goalCell.appendChild(goalInput);

        const metCell = row.insertCell(2);
        const metCheckbox = document.createElement('input');
        metCheckbox.type = 'checkbox';
        metCheckbox.addEventListener('change', updateScore);
        metCell.appendChild(metCheckbox);
    });
}

function updateScore() {
    let score = 0;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            score += 1;
        }
    });
    document.getElementById('score').textContent = score;
}

function saveData() {
    // Placeholder for saving data logic
    console.log('Data saved!');
    // This would involve storing data in localStorage or a server-side database.
}

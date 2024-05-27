document.addEventListener('DOMContentLoaded', function() {
    populateGoalsTable();
});

function populateGoalsTable() {
    const table = document.getElementById('goals-table');
    for (let i = 1; i <= 6; i++) {
        const row = table.insertRow();
        const monthCell = row.insertCell();
        monthCell.textContent = `Month ${i}`;
        
        const goalCell = row.insertCell();
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter goal...';
        goalCell.appendChild(input);

        const metCell = row.insertCell();
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            updateScore();
            row.style.backgroundColor = checkbox.checked ? 'lightgreen' : 'salmon';
        });
        metCell.appendChild(checkbox);
    }
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

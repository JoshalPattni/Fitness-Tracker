function populateGoalsTable() {
    const table = document.getElementById('goals-table');
    let measurements = ['weight', 'rightArm', 'leftArm', 'waist', 'stomach', 'chest', 'bum'];

    for (let i = 1; i <= 6; i++) {
        const row = table.insertRow();
        const monthCell = row.insertCell(0);
        monthCell.innerHTML = `Month ${i}`;

        measurements.forEach((measurement, index) => {
            const cell = row.insertCell();
            const inputElement = document.createElement('input');
            inputElement.type = 'number';
            inputElement.min = 0;
            inputElement.id = measurement + '-goal-' + i;
            inputElement.placeholder = measurement;
            cell.appendChild(inputElement);
        });

        const goalCheckCell = row.insertCell();
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = 'goal-check-' + i;
        checkBox.onchange = () => checkGoal(checkBox, row);
        goalCheckCell.appendChild(checkBox);
    }
}

function checkGoal(checkBox, row) {
    if (checkBox.checked) {
        row.style.backgroundColor = 'lightgreen';
    } else {
        row.style.backgroundColor = 'salmon';
    }
}

function saveData() {
    const data = {
        joshal: {
            weight: document.getElementById('joshal-weight').value,
            rightArm: document.getElementById('joshal-right-arm').value,
            leftArm: document.getElementById('joshal-left-arm').value,
            waist: document.getElementById('joshal-waist').

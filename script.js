function saveData() {
    let data = {
        joshal: {
            weight: document.getElementById('joshal-weight').value,
            rightArm: document.getElementById('joshal-right-arm').value,
            leftArm: document.getElementById('joshal-left-arm').value,
            waist: document.getElementById('joshal-waist').value,
            stomach: document.getElementById('joshal-stomach').value,
            chest: document.getElementById('joshal-chest').value,
        },
        poonam: {
            weight: document.getElementById('poonam-weight').value,
            waist: document.getElementById('poonam-waist').value,
            stomach: document.getElementById('poonam-stomach').value,
            bum: document.getElementById('poonam-bum').value,
        },
        joshalReward: document.getElementById('joshal-reward').value,
        poonamReward: document.getElementById('poonam-reward').value
    };

    localStorage.setItem('fitnessData', JSON.stringify(data));
    alert("Data saved successfully!");
}

function loadData() {
    let retrievedData = localStorage.getItem('fitnessData');
    if (retrievedData) {
        let data = JSON.parse(retrievedData);

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

        document.getElementById('joshal-reward').value = data.joshalReward;
        document.getElementById('poonam-reward').value = data.poonamReward;
    } else {
        alert("No data found. Please enter and save your data.");
    }
}

function populateGoalsTable() {
    let table = document.getElementById('goals-table');
    for (let i = 1; i <= 6; i++) {
        let row = table.insertRow();
        let monthCell = row.insertCell(0);
        monthCell.innerHTML = `Month ${i}`;
        let inputs = ['weight', 'rightArm', 'leftArm', 'waist', 'stomach', 'chest', 'bum'];
        inputs.forEach(input => {
            let cell = row.insertCell();
            let inputElement = document.createElement('input');
            inputElement.type = 'number';
            inputElement.min = 0;
            inputElement.id = input + '-goal-' + i;
            inputElement.placeholder = input;
            cell.appendChild(inputElement);
        });
    }
}

window.onload = function() {
    loadData();
    populateGoalsTable();
};

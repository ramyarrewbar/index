function addRow() {
   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    if (!name || !email || !age) {
        alert("Please enter all fields.");
        return;
    }

  
    const table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = age;

    
    showCustomAlert();

}

function showCustomAlert() {
    const customAlert = document.getElementById("customAlert");

  
    customAlert.style.display = "block";
}

function closeCustomAlert() {
    const customAlert = document.getElementById("customAlert");

    customAlert.style.display = "none";
}
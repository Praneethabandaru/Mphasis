function addStudent() {
    const studentNameInput = document.getElementById("studentName") as HTMLInputElement;
    const studentAgeInput = document.getElementById("studentAge") as HTMLInputElement;
    const studentTableBody = document.getElementById("studentTableBody") as HTMLTableSectionElement;

    const studentName = studentNameInput.value;
    const studentAge = studentAgeInput.value;

    if (studentName && studentAge) {
        const newRow = studentTableBody.insertRow();

        const nameCell = newRow.insertCell(0);
        const ageCell = newRow.insertCell(1);

        nameCell.textContent = studentName;
        ageCell.textContent = studentAge;

        studentNameInput.value = "";
        studentAgeInput.value = "";
    } else {
        alert("Please enter both student name and age.");
    }
}

function searchStudent() {
    let searchInput = document.getElementById("searchInput") as HTMLInputElement;
    let filter = searchInput.value.toLowerCase();
    let studentTableBody = document.getElementById("studentTableBody") as HTMLTableSectionElement;
    let rows = studentTableBody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const nameCell = rows[i].getElementsByTagName("td")[0];
        const ageCell = rows[i].getElementsByTagName("td")[1];
        if (nameCell && ageCell) {
            let nameText = nameCell.textContent || nameCell.innerText;
            let ageText = ageCell.textContent || ageCell.innerText;
            if (nameText.toLowerCase().indexOf(filter) > -1 || ageText.toLowerCase().indexOf(filter) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}


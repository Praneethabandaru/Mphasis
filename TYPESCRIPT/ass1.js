function addStudent() {
    var studentNameInput = document.getElementById("studentName");
    var studentAgeInput = document.getElementById("studentAge");
    var studentTableBody = document.getElementById("studentTableBody");
    var studentName = studentNameInput.value;
    var studentAge = studentAgeInput.value;
    if (studentName && studentAge) {
        var newRow = studentTableBody.insertRow();
        var nameCell = newRow.insertCell(0);
        var ageCell = newRow.insertCell(1);
        nameCell.textContent = studentName;
        ageCell.textContent = studentAge;
        studentNameInput.value = "";
        studentAgeInput.value = "";
    }
    else {
        alert("Please enter both student name and age.");
    }
}
function searchStudent() {
    var searchInput = document.getElementById("searchInput");
    var filter = searchInput.value.toLowerCase();
    var studentTableBody = document.getElementById("studentTableBody");
    var rows = studentTableBody.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var nameCell = rows[i].getElementsByTagName("td")[0];
        var ageCell = rows[i].getElementsByTagName("td")[1];
        if (nameCell && ageCell) {
            var nameText = nameCell.textContent || nameCell.innerText;
            var ageText = ageCell.textContent || ageCell.innerText;
            if (nameText.toLowerCase().indexOf(filter) > -1 || ageText.toLowerCase().indexOf(filter) > -1) {
                rows[i].style.display = "";
            }
            else {
                rows[i].style.display = "none";
            }
        }
    }
}

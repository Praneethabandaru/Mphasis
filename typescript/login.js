// const form = document.getElementById("myForm") as HTMLFormElement;
// const validateBtn = document.getElementById("validateBtn");
// validateBtn?.addEventListener("click", () => {
//   if (form.checkValidity()) {
//     alert("Form is valid!");
//     // You can manually submit or process form here
//     // form.submit();  // optional
//   } else {
//     // This will show built-in HTML5 validation errors
//     form.reportValidity();
//   }
// })
function login() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if (name.trim() === "" || password.trim() === "") {
        alert("Check Login Details");
    }
    else {
        var message = document.getElementById("d1");
        message.innerHTML = "Login Successful";
        setTimeout(function () {
            sessionStorage.setItem("name", name);
            // Redirect to products.html
            window.location.href = "products.html";
        }, 1000); // 1-second delay
    }
}

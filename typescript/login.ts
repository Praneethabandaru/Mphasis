function login() {
  const name: string = (document.getElementById("name") as HTMLInputElement).value;
  const password: string = (document.getElementById("password") as HTMLInputElement).value;

  if (name.trim() === "" || password.trim() === "") {
      alert("Check Login Details");
  } else {
      const message = (document.getElementById("d1") as HTMLDivElement);
      message.innerHTML = "Login Successful";
      setTimeout(() => {
          sessionStorage.setItem("name", name);
          window.location.href = "products.html";
      }, 1000); 
  }
}
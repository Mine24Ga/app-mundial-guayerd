if (localStorage.getItem("logged") === "true") {
    window.location.href = "/map.html";
  }

  const credenciales = {
    email: "estudiante@guayerd.com",
    password: "123456",
  };

  let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (
      form.elements.password.value === credenciales.password &&
      form.elements.email.value === credenciales.email
    ) {
      localStorage.setItem("logged", "true");
      window.location.href = "/map.html";
    } else {
      alert("Credenciales inválidas");
    }
  });

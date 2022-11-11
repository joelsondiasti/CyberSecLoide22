

const formLogin = document.getElementById("loginForm");
const btnSubmit = document.getElementById("btnSubmit");
const spinner = document.createElement("img");

spinner.classList.add("spinner");
spinner.setAttribute("src", "./assets/icons/circle.svg");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  btnSubmit.innerHTML = "";
  btnSubmit.appendChild(spinner);
  setTimeout(() => {}, 3000);

  const data = new FormData(event.target);
  const requestLogin = Object.fromEntries(data);

  const findedUser = USERS.find((user) => user.login === requestLogin.login);

  if (requestLogin.password === findedUser.password) {
    formLogin.reset();
    window.location.href = findedUser.url;
  } else {
    btnSubmit.innerHTML = "Entrar";
    alert("Senha Incorreta! Tente Novamente");
  }
});


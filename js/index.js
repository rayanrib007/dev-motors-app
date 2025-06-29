const menuMobile = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenuMobile = document.querySelector(".mobile-menu-close");
const darkThemeIcon = document.querySelector(".dark-theme-icon");
const lightThemeIcon = document.querySelector(".light-theme-icon");
const inputName = document.querySelector("#name");
const nameMessage = document.querySelector(".name-error-message");
const inputEmail = document.querySelector("#email");
const emailMessage = document.querySelector(".email-error-message");
const inputMessage = document.querySelector("#message");
const messageMessage = document.querySelector(".message-error-message");
const form = document.querySelector("form");
const heroButton = document.querySelector(".hero-button");

function redirectToWhatsapp() {
  const phoneNumber = "5535998907857";
  const message =
    "Olá, gostaria de saber mais sobre o serviços de manutenção outomotiva.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
}

heroButton.addEventListener("click", redirectToWhatsapp);

menuMobile.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu-view");
});

closeMenuMobile.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-menu-view");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    mobileMenu.classList.remove("mobile-menu-view");
  }
});

darkThemeIcon.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  location.reload();
});

lightThemeIcon.addEventListener("click", () => {
  localStorage.setItem("theme", "light");
  location.reload();
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    lightThemeIcon.classList.toggle("header-theme-icon-hide");
    darkThemeIcon.classList.toggle("header-theme-icon-hide");
  }
});

function validateForm() {
  let isValid = true;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (inputName.value === "") {
    nameMessage.innerHTML =
      "Campo 'nome' obrigatório. Por favor, insira um nome.";
    isValid = false;
  }

  if (inputEmail.value === "") {
    emailMessage.innerHTML =
      "Campo 'email' obrigatório. Por favor, insira um email.";
    isValid = false;
  }

  if (!emailRegex.test(inputEmail.value)) {
    emailMessage.innerHTML =
      "Email inválido. Por favor, insira um email válido.";
    isValid = false;
  }

  if (inputMessage.value === "") {
    messageMessage.innerHTML =
      "Campo 'mensagem' obrigatório. Por favor, insira uma mensagem.";
    isValid = false;
  }

  return isValid;
}

function clearFormErrorMessages() {
  nameMessage.innerHTML = "";
  emailMessage.innerHTML = "";
  messageMessage.innerHTML = "";
}

form.addEventListener("submit", (e) => {
  clearFormErrorMessages();
  e.preventDefault();
  if (!validateForm()) return;
  alert(
    "Formulario enviado com sucesso! Em breve entraremos em contato com você."
  );
  location.replace("/");
});

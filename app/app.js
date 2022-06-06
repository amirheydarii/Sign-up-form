const userPassword = document.getElementById("userPassword");
const userConfirmPass = document.getElementById("userConfirmPassword");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  if (userPassword.value !== userConfirmPass.value) {
    e.preventDefault();
    message();
  }
});

function message() {
  userConfirmPass.style.border = "solid 1px rgb(255, 0, 0)";
  userConfirmPass.style.color = "red";
  alert("password doesn't same");
}

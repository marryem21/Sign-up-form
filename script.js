const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");

confirmPasswordInput.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    passwordError.textContent = ""; // No error message if passwords match
  } else {
    passwordError.textContent = "Passwords do not match";
    confirmPasswordInput.style.borderColor = "red";
    passwordInput.style.borderColor = "red";
  }
}

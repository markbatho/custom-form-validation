const form = document.querySelector("form");

const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirm");

const emailError = document.querySelector("#emailError");
const countryError = document.querySelector("#countryError");
const zipError = document.querySelector("#zipError");
const passwordError = document.querySelector("#passwordError");
const passwordConfirmationError = document.querySelector("#passwordConfirmationError");

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  }
  emailError.className = "error active";
}

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = "You need to select a country.";
  }
  countryError.className = "error active";
}

function showZipError() {
  if (zip.validity.valueMissing) {
    zipError.textContent = "You need to enter an zip code.";
  } else if (zip.validity.patternMismatch) {
    zipError.textContent = "Entered value needs to be a valid zip code.";
  }
  zipError.className = "error active";
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password.";
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least 8 characters long. You entered ${password.value.length}.`
  } else if (password.validity.tooLong) {
    passwordError.textContent = `Password should be under 255 characters long. You entered ${password.value.length}.`
  }
  passwordError.className = "error active";
}

function showPasswordConfirmationError() {
  if (passwordConfirmation.value !== password.value) {
    passwordConfirmationError.textContent = "Passwords are not matching.";
    passwordConfirmation.setCustomValidity("Passwords are not matching.");
  } else if (passwordConfirmation.validity.valueMissing) {
    passwordConfirmationError.textContent = "Passwords are not matching.";
  } else {
    passwordConfirmation.setCustomValidity("");
    passwordConfirmationError.textContent = "";
  }
  passwordConfirmationError.className = "error active";
}

function checkPasswords() {
  if (password.value !== passwordConfirmation.value) {
    showPasswordConfirmationError();
  }

  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    password.classList.remove("noinvalid");
    showPasswordError();
  }

  if (passwordConfirmation.validity.valid) {
    passwordConfirmationError.textContent = "";
    passwordConfirmationError.className = "error";
  } else {
    passwordConfirmation.classList.remove("noinvalid");
    showPasswordConfirmationError();
  }
}

email.oninput = () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    email.classList.remove("noinvalid");
    showEmailError();
  }
}

zip.oninput = () => {
  if (zip.validity.valid) {
    zipError.textContent = "";
    zipError.className = "error";
  } else {
    zip.classList.remove("noinvalid");
    showZipError();
  }
}

password.oninput = () => checkPasswords();
passwordConfirmation.oninput = () => checkPasswords();

form.onsubmit = (e) => {
  e.preventDefault();
  if (!email.validity.valid) {
    email.classList.remove("noinvalid");
    showEmailError();
  }
  
  if (!country.validity.valid) {
    country.classList.remove("noinvalid");
    showCountryError();
  }
  
  if (!zip.validity.valid) {
    zip.classList.remove("noinvalid");
    showZipError();
  }
  
  if (!password.validity.valid) {
    password.classList.remove("noinvalid");
    showPasswordError();
  }
  
  if (!passwordConfirmation.validity.valid) {
    passwordConfirmation.classList.remove("noinvalid");
    showPasswordConfirmationError();
  }
};

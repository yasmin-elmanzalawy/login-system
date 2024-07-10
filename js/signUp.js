let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let signUpBtn = document.getElementById("signUpBtn");
let errorMsg = document.getElementById("errorMsg");
let successMsg = document.getElementById("successMsg");
let emailDuplicate = document.getElementById("emailDuplicate");
let userList = [];

if (localStorage.getItem("user") !== null) {
  userList = JSON.parse(localStorage.getItem("user"));
}

// name validation
function nameValid() {
  const regex = /^[a-zA-Z0-9_-]{3,15}$/;
  let isValid = regex.test(nameInput.value);
  nameInput.classList.remove("is-valid", "is-invalid");

  if (isValid) {
    nameInput.classList.add("is-valid");
    return true;
  } else {
    nameInput.classList.add("is-invalid");
    return false;
  }
}
$("#name").on("input", function () {
  nameValid();
});

//email validation
function emailValid() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isValid = regex.test(emailInput.value);
  emailInput.classList.remove("is-valid", "is-invalid");
  if (isValid) {
    emailInput.classList.add("is-valid");
    return true;
  } else {
    emailInput.classList.add("is-invalid");
    return false;
  }
}
$("#email").on("input", function () {
  emailValid();
});

//password validation
function passwordValid() {
  const regex = /^[a-z0-9_-]{5,15}$/;
  let isValid = regex.test(passwordInput.value);
  passwordInput.classList.remove("is-valid", "is-invalid");
  if (isValid) {
    passwordInput.classList.add("is-valid");
    return true;
  } else {
    passwordInput.classList.add("is-invalid");
    return false;
  }
}
$("#password").on("input", function () {
  passwordValid();
});

// sign up button
$("#signUpBtn").on("click", function () {
  if (nameValid() && emailValid() && passwordValid()) {
    successMsg.classList.remove("d-none");
    successMsg.classList.add("d-block");
    errorMsg.classList.add("d-none");
    emailDuplicate.classList.add("d-none");
    addUser();
  } else {
    errorMsg.classList.remove("d-none");
    errorMsg.classList.add("d-block");
    successMsg.classList.add("d-none");
    emailDuplicate.classList.add("d-none");
  }
});

// adding user
function addUser() {
  let isDuplicate = false;

  for (let i = 0; i < userList.length; i++) {
    if (emailInput.value == userList[i].email) {
      isDuplicate = true;
      
    }
  }
  if (isDuplicate) {
    emailDuplicate.classList.remove("d-none");
    successMsg.classList.add("d-none");
    successMsg.classList.add("d-none");
    emailDuplicate.classList.add("d-block");
  } else {
    let users = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    userList.push(users);
    console.log(userList);
    localStorage.setItem("user", JSON.stringify(userList));
  }
}

let email = document.getElementById("email");
let password = document.getElementById("password");
let errorMsg = document.getElementById("errorMsg");
let userList = [];

// get data from local storage
userList = JSON.parse(localStorage.getItem("user"));

$("#LoginBtn").on("click", function () {
  if (email.value == "" && password.value == "") {
    errorMsg.classList.remove("d-none");
    errorMsg.classList.add("d-block");
    email.classList.add('is-invalid');
    password.classList.add('is-invalid');
  } else {
    getUser();
  }
});

function getUser() {
  for (let i = 0; i < userList.length; i++) {
    if(email.value == userList[i].email && password.value == userList[i].password){
        let username = userList[i].name;
        localStorage.setItem('user name' , username);
        location.href='https://yasmin-elmanzalawy.github.io/login-system/home.html';
        
    }
  else{
    errorMsg.classList.remove("d-none");
    errorMsg.classList.add("d-block");
    email.classList.add('is-invalid');
    password.classList.add('is-invalid');
  }
}}

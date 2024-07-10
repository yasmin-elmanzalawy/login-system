let theName = document.getElementById('theName');
let logout = document.getElementById('logout');
let userList = [];
userList = localStorage.getItem('user');

theName.innerHTML = localStorage.getItem('user name');
$('#logout').on('click', function(){
    location.href= 'https://yasmin-elmanzalawy.github.io/login-system/index.html'
})

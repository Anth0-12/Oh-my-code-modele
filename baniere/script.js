// Je séléctionne et je stocke
// bouton .btn-success
const btnSuccess = document.querySelector(".btn-success");
const btnDeny = document.querySelector(".btn-deny");

// div cookies
const cookies = document.querySelector(".cookies");

// Action
btnSuccess.addEventListener("click", function(){
    cookies.style.opacity = "0";
});

btnDeny.addEventListener("click", function(){
    cookies.style.opacity = "0";
});
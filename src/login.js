/*const EMAIL_1 = 'camilo@huila.edu.co';
const PASSWORD_1= 'huila2020';

const DANE_1= '1193393239';
const PASSWOR_DANE= 'sede321';

let buttonViz=document.getElementById('buttonViz');
let loginViz=document.getElementById('loginViz');
let loginButtonViz= document.getElementById('buttonLoginViz');
let emailInputViz = document.getElementById('emailInputViz');
let passwordInputViz = document.getElementById('passwordInputViz');


let buttonForm=document.getElementById('buttonForm');
let loginForm=document.getElementById('loginForm');
let loginButtonForm= document.getElementById('ButtonLoginForm');
let daneInputForm= document.getElementById('daneInputForm');
let passwordInputForm= document.getElementById('passwordInputForm');


loginButtonViz.addEventListener("click",function(){
    if(emailInputViz.value==EMAIL_1 && passwordInputViz.value==PASSWORD_1){ 
        alert("login exitoso VIZ");
    }else{
        alert("pailas");
        
    }
    console.log(emailInputViz.value);
    console.log(passwordInputViz.value);
});

loginButtonForm.addEventListener("click",function(){
    if(daneInputForm.value==DANE_1 && passwordInputForm.value==PASSWORD_DANE){
        alert("login exitoso FORM");
    }else{
        alert("pailas");
    }
    console.log(daneInputForm.value);
    console.log(passwordInputForm.value);
});

buttonForm.addEventListener("click",function(){
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
    } else {
        loginForm.style.display = "none";
    }
});

buttonViz.addEventListener("click",function(){
    if (loginViz.style.display === "none") {
        loginViz.style.display = "block";
    } else {
        loginViz.style.display = "none";
    }
});



/*
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }*/

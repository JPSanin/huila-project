const EMAIL = 'camilo@huila.edu.co';
const PASSWORD= 'huila2020';


let emailVis = document.getElementById('user');
let passwordVis = document.getElementById('passwordInput');
let loginButton = document.getElementById('buttonLogin');
let changeLogin= document.getElementById('formBox');


loginButton.addEventListener("click",function(){
    if(emailVis.value==EMAIL && passwordVis.value==PASSWORD){ 
        alert("login exitoso");
    }else{
        alert("login fallado");
        
    }
    console.log(emailVis.value);
    console.log(passwordVis.value);
});

changeLogin.addEventListener("click",function(){
   
    window.location.href="./indexForm.html";
   
});


/*
loginButtonForm.addEventListener("click",function(){
    if(daneInputForm.value==DANE_1 && passwordInputForm.value==PASSWORD_DANE){
        alert("login exitoso FORM");
    }else{
        alert("pailas");
    }
    console.log(daneInputForm.value);
    console.log(passwordInputForm.value);
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

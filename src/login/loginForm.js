const DANE = '4401454688';
const PASSWORD= 'montesitos2021';


let daneForm = document.getElementById('user');
let passwordForm = document.getElementById('passwordInput');
let loginButton = document.getElementById('buttonLogin');
let changeLogin= document.getElementById('visBox');


loginButton.addEventListener("click",function(){
    if(daneForm.value==DANE && passwordForm.value==PASSWORD){ 
        window.location.href="../indexesForm/indexFormFill.html";
    }else{
        alert("login fallado");
        
    }
});

changeLogin.addEventListener("click",function(){
   
    window.location.href="./indexVis.html";
   
});

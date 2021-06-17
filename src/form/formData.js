var numQuestions = document.getElementById("numInput");
var calendarQuestion = document.getElementById("calendarInput");
var dropDownQuestion = document.getElementById("dropdownList");
var nextButton = document.getElementById("nextBtn");
var nextButton2 = document.getElementById("nextBtn2");
var nextButton3 = document.getElementById("nextBtn3");
var nextButton4 = document.getElementById("nextBtn4");
var submitButton = document.getElementById("submitBtn");
const Frp = new Array();

function formulario1(){   
 
   if(numQuestions.value != "" && calendarQuestion.value != "")
    {
           //guardar la informacion en una variable
           var quest1 = $(".quest1 option:selected").html();
           var quest2 = $(".quest2 option:selected").html();
           var quest3 = $(".quest3 option:selected").html();   
           var numInput = $('#numInput').val();
           var calendarInput = $('#calendarInput').val();
           //agrego las variables en el arreglo
           Frp.push(quest1, quest2, quest3, numInput, calendarInput);           
           console.log(Frp);
           //animacion esconder y mostrar
           $(".dataForm1").hide();
           $("#nextBtn").hide();
           $(".dataForm2").show();
           
    }

    else
    {  
        alert("Por favor responda todas las preguntas");
    }
   
  
  
}

function formulario2() {
    
    if(document.getElementById("num1").value != "" && document.getElementById("num2").value != ""
        && document.getElementById("num3").value != "" && document.getElementById("num4").value != ""
        && document.getElementById("num5").value != "" && document.getElementById("num6").value != "")
        {
             //guardar la informacion en una variable
            var num1 = $('#num1').val();
            var num2 = $('#num2').val();
            var num3 = $('#num3').val();
            var num4 = $('#num4').val();
            var num5 = $('#num5').val();
            var num6 = $('#num6').val();


            //agrego las variables en el arreglo
            Frp.push(num1, num2, num3, num4, num5, num6);     
            //animacion esconder y mostrar
             console.log(Frp);
             $(".dataForm2").hide();
             $("#nextBtn").hide();
             $(".dataForm3").show();
        }
    
        else
        {    
           alert("Por favor responda todas las preguntas");     
     }   }



function formulario3() {

        if(document.getElementById("num7").value != "" && document.getElementById("num8").value != ""
        && document.getElementById("num9").value != "" && document.getElementById("num9").value != ""
        && document.getElementById("num10").value != "" && document.getElementById("num11").value != ""
        && document.getElementById("num12").value != "" && document.getElementById("num13").value != ""
        && document.getElementById("num14").value != "" && document.getElementById("num15").value != ""
        && document.getElementById("num16").value != "" && document.getElementById("num17").value != ""
        && document.getElementById("num18").value != "" && document.getElementById("num19").value != ""
        && document.getElementById("num20").value != "" && document.getElementById("num21").value != ""
        && document.getElementById("num22").value != "" && document.getElementById("num23").value != ""
        && document.getElementById("num24").value != "" && document.getElementById("num25").value != ""
        && document.getElementById("num26").value != "" && document.getElementById("num27").value != ""
        && document.getElementById("num28").value != "" && document.getElementById("num29").value != ""
        && document.getElementById("num30").value != "" && document.getElementById("num31").value != ""
        && document.getElementById("num32").value != "" && document.getElementById("num33").value != "")
        {


            //guardar la informacion en una variable
            var num7 = $('#num7').val();    var num8 = $('#num8').val();
            var num9 = $('#num9').val();    var num10 = $('#num10').val();
            var num11 = $('#num11').val();  var num12 = $('#num12').val();
            var num13 = $('#num13').val();  var num14 = $('#num14').val();
            var num15 = $('#num15').val();  var num16 = $('#num16').val();
            var num17 = $('#num17').val();  var num18 = $('#num18').val();
            var num19 = $('#num19').val();  var num20 = $('#num20').val();
            var num21 = $('#num21').val();  var num22 = $('#num22').val();
            var num23 = $('#num23').val();  var num24 = $('#num24').val();
            var num25 = $('#num25').val();  var num26 = $('#num26').val();
            var num27 = $('#num27').val();  var num28 = $('#num28').val();
            var num29 = $('#num29').val();  var num30 = $('#num30').val();
            var num31 = $('#num31').val();  var num32 = $('#num32').val();
            var num33 = $('#num33').val();  

            //agrego las variables en el arreglo
            Frp.push(num7, num8, num9, num10, num11, num12, num13, num14, num15, 
                num16, num17, num18, num19, num20, num21, num22, num23, num24,
                num25, num26, num27, num28, num29, num30, num31, num32, num33);

            //animacion esconder y mostrar
            console.log(Frp);
            $(".dataForm3").hide();
            $("#nextBtn").hide();
             $(".dataForm4").show();
        }
    
        else
        {  
            alert("Por favor responda todas las preguntas");
        }

}

function formulario4() {

if(document.getElementById("num34").value != "" && document.getElementById("num35").value != ""
        && document.getElementById("num36").value != "" && document.getElementById("num37").value != ""
        && document.getElementById("num38").value != "" && document.getElementById("num39").value != ""
        && document.getElementById("num40").value != "" && document.getElementById("num41").value != ""
        && document.getElementById("num42").value != "" && document.getElementById("num43").value != ""
        && document.getElementById("num44").value != "" && document.getElementById("num45").value != ""
        && document.getElementById("num46").value != "" && document.getElementById("num47").value != ""
        && document.getElementById("num48").value != "" && document.getElementById("num49").value != "")
        {

            //guardar la informacion en una variable
            var num34 = $('#num34').val();  var num35 = $('#num35').val();
            var num36 = $('#num36').val();  var num37 = $('#num37').val();
            var num38 = $('#num38').val();  var num39 = $('#num39').val();
            var num40 = $('#num40').val();  var num41 = $('#num41').val();
            var num42 = $('#num42').val();  var num43 = $('#num43').val();
            var num44 = $('#num44').val();  var num45 = $('#num45').val();
            var num46 = $('#num46').val();  var num47 = $('#num47').val();
            var num48 = $('#num48').val();  var num49 = $('#num49').val();
            
            //agrego las variables en el arreglo

            Frp.push(num34, num35, num36, num37, num38, num39, num40, 
                num41, num42, num43, num44, num45, num46, num47, num48, num49);
        
             //animacion esconder y mostrar
            console.log(Frp);
            $(".dataForm4").hide();
            $("#nextBtn").hide();
             $(".dataForm5").show();

        }
    
        else
        {  
            alert("Por favor responda todas las preguntas");
        }
}

/*

*/

            
    function formulario5() {
             if(document.getElementById("num50").value != "" && document.getElementById("num51").value != ""
        && document.getElementById("num52").value != "" && document.getElementById("num53").value != ""
        && document.getElementById("num54").value != "" && document.getElementById("num55").value != ""
        && document.getElementById("num56").value != "" && document.getElementById("num57").value != ""
        && document.getElementById("num58").value != "" && document.getElementById("num59").value != ""
        && document.getElementById("num60").value != "" && document.getElementById("num61").value != ""
        && document.getElementById("num62").value != "" && document.getElementById("num63").value != ""
        && document.getElementById("num64").value != "" && document.getElementById("num65").value != ""
        && document.getElementById("num66").value != "" && document.getElementById("num67").value != ""
        && document.getElementById("num68").value != "" && document.getElementById("num69").value != ""
        && document.getElementById("num70").value != "" && document.getElementById("num71").value != ""
        && document.getElementById("num72").value != "" && document.getElementById("num73").value != ""
        && document.getElementById("num74").value != "" && document.getElementById("num75").value != ""
        && document.getElementById("num76").value != "" && document.getElementById("num77").value != "")
        {
            


            var num50 = $('#num50').val();  var num51 = $('#num51').val();
            var num52 = $('#num52').val();  var num53 = $('#num53').val();
            var num54 = $('#num54').val();  var num55 = $('#num55').val();
            var num56 = $('#num56').val();  var num57 = $('#num57').val();
            var num58 = $('#num58').val();  var num59 = $('#num59').val();
            var num60 = $('#num60').val();  
            var num61 = $('#num61').val();  var num62 = $('#num62').val();
            var num63 = $('#num63').val();  var num64 = $('#num64').val();
            var num65 = $('#num65').val();  var num66 = $('#num66').val();
            var num67 = $('#num67').val();  var num68 = $('#num68').val();
            var num69 = $('#num69').val();  var num70 = $('#num70').val();
            var num71 = $('#num71').val();  var num72 = $('#num72').val();
            var num73 = $('#num73').val();  var num74 = $('#num74').val();
            var num75 = $('#num75').val();  var num76 = $('#num76').val();
            var num77 = $('#num77').val();


            Frp.push(num50, num51, num52, num53, num54, num55, num56, 
                num57, num58, num59, num60, num61, num62, num63, num64, num65,
                num66, num67, num68,num69,num70, num71, num72, num73, num74,num75, num76, num77);
            
            alert("Respuestas enviadas con éxito");
            
        }
    
        else
        {  
            alert("Por favor responda todas las preguntas");
        }
 }

 function exito(){
    $(".dataForm5").hide();
            $("#nextBtn").hide();
            $(".exito").show();
    console.log(Frp[0]+'numero cero');
    document.getElementById("tablassss").innerHTML = "<p>"+indice+"-"+elemento+"</p>";
    /*var cadena = '';
    Frp.forEach(function(elemento, indice, array) {
        console.log(elemento, indice);
        document.getElementById("tablassss").innerHTML = "<p>"+indice+"-"+elemento+"</p>";
        //var cadena = ;
    })*/
    /*for (x=0;x<Frp.length;x++){
     console.log(Frp[x] + "--");
        var cadena += "<p>"+Frp[x][0]+"</p>"; 
    }
    */

    //$("#tablassss").html(cadena);
 }

/*      
try
{

    nextButton3.addEventListener("click", function()
    {

        if(document.getElementById("num7").value != "" && document.getElementById("num8").value != ""
        && document.getElementById("num9").value != "" && document.getElementById("num9").value != ""
        && document.getElementById("num10").value != "" && document.getElementById("num11").value != ""
        && document.getElementById("num12").value != "" && document.getElementById("num13").value != ""
        && document.getElementById("num14").value != "" && document.getElementById("num15").value != ""
        && document.getElementById("num16").value != "" && document.getElementById("num17").value != ""
        && document.getElementById("num18").value != "" && document.getElementById("num19").value != ""
        && document.getElementById("num20").value != "" && document.getElementById("num21").value != ""
        && document.getElementById("num22").value != "" && document.getElementById("num23").value != ""
        && document.getElementById("num24").value != "" && document.getElementById("num25").value != ""
        && document.getElementById("num26").value != "" && document.getElementById("num27").value != ""
        && document.getElementById("num28").value != "" && document.getElementById("num29").value != ""
        && document.getElementById("num30").value != "" && document.getElementById("num31").value != ""
        && document.getElementById("num32").value != "" && document.getElementById("num33").value != "")
        {
            window.location.href="../indexesForm/indexFormFillPage4.html";
        }
    
        else
        {  
            alert("Por favor responda todas las preguntas");
        }
    })
}
catch(error)
{
    console.log("no next button in this page");
}*/
/*
try
{
    nextButton4.addEventListener("click", function()
    {
        if(document.getElementById("num34").value != "" && document.getElementById("num35").value != ""
        && document.getElementById("num36").value != "" && document.getElementById("num37").value != ""
        && document.getElementById("num38").value != "" && document.getElementById("num39").value != ""
        && document.getElementById("num40").value != "" && document.getElementById("num41").value != ""
        && document.getElementById("num42").value != "" && document.getElementById("num43").value != ""
        && document.getElementById("num44").value != "" && document.getElementById("num45").value != ""
        && document.getElementById("num46").value != "" && document.getElementById("num47").value != ""
        && document.getElementById("num48").value != "" && document.getElementById("num49").value != "")
        {
            window.location.href="../indexesForm/indexFormFillPage5.html";
        }
    
        else
        {  
            alert("Por favor responda todas las preguntas");
        }
    })
}
catch(error)
{
    console.log("no next button in this page");
}*/
/*
try
{
    submitButton.addEventListener("click", function()
    {
        if(document.getElementById("num50").value != "" && document.getElementById("num51").value != ""
        && document.getElementById("num52").value != "" && document.getElementById("num53").value != ""
        && document.getElementById("num54").value != "" && document.getElementById("num55").value != ""
        && document.getElementById("num56").value != "" && document.getElementById("num57").value != ""
        && document.getElementById("num58").value != "" && document.getElementById("num59").value != ""
        && document.getElementById("num60").value != "" && document.getElementById("num61").value != ""
        && document.getElementById("num62").value != "" && document.getElementById("num63").value != ""
        && document.getElementById("num64").value != "" && document.getElementById("num65").value != ""
        && document.getElementById("num66").value != "" && document.getElementById("num67").value != ""
        && document.getElementById("num68").value != "" && document.getElementById("num69").value != ""
        && document.getElementById("num70").value != "" && document.getElementById("num71").value != ""
        && document.getElementById("num72").value != "" && document.getElementById("num73").value != ""
        && document.getElementById("num74").value != "" && document.getElementById("num75").value != ""
        && document.getElementById("num76").value != "" && document.getElementById("num77").value != "")
        {
            alert("Respuestas enviadas con éxito");
            window.location.href="../indexesLogin/indexForm.html";
        }
    
        else
        {  
            alert("Por favor responda todas las preguntas");
        }
    })
}

catch(error)
{
    console.log("no submit button in this page");
}*/
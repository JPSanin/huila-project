var numQuestions = document.getElementById("numInput");
var calendarQuestion = document.getElementById("calendarInput");
var dropDownQuestion = document.getElementById("dropdownList");
var nextButton = document.getElementById("nextBtn");
var nextButton2 = document.getElementById("nextBtn2");
var nextButton3 = document.getElementById("nextBtn3");
var nextButton4 = document.getElementById("nextBtn4");
var submitButton = document.getElementById("submitBtn");

try
{
    nextButton.addEventListener("click", function()
    {
         console.log(numQuestions.value);

        if(numQuestions.value != "" && calendarQuestion.value != "")
        {
            window.location.href="../indexesForm/indexFormFillPage2.html";
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
}

try
{
    nextButton2.addEventListener("click", function()
    {
         //console.log(numQuestions.value);

        if(document.getElementById("num1").value != "" && document.getElementById("num2").value != ""
        && document.getElementById("num3").value != "" && document.getElementById("num4").value != ""
        && document.getElementById("num5").value != "" && document.getElementById("num6").value != "")
        {
            window.location.href="../indexesForm/indexFormFillPage3.html";
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
}

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
}

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
}

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
}
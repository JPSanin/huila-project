var numQuestions = document.getElementById("numInput");
var calendarQuestion = document.getElementById("calendarInput");
var dropDownQuestion = document.getElementById("dropdownList");
var nextButton = document.getElementById("nextBtn");
var nextButton2 = document.getElementById("nextBtn2");
var nextButton3 = document.getElementById("nextBtn3");
var nextButton4 = document.getElementById("nextBtn4");
var submitButton = document.getElementById("submitBtn");
const Frp = new Array();
var cantidadpr;
var cantidadgrupos;
var cantidadDocentes;
var modelo;

function formulario1(){   
 
   if(numQuestions.value != "" && calendarQuestion.value != "")
    {
           var dias = parseInt(numQuestions.value);
           if(dias<6)
           {//guardar la informacion en una variable
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
           $("#label1").hide();
           $(".dataForm2").show();}

           else
    {  
        alert("el número de dias no puede ser mayor a 5");
    }
           
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
            var cantidadEstudiantes = parseInt($('#num1').val());
            var cantidadpr = parseInt($('#num3').val());
            if(cantidadEstudiantes<cantidadpr){
 alert("El Número de estudiantes en modelos presencialidad completa/alternancia no puede ser mayor a la cifra de total de estudiantes matriculados");     
            }
            else{
             //guardar la informacion en una variable
            
            
            var num1 = $('#num1').val();
            var num2 = $('#num2').val();
            var num3 = $('#num3').val();
            var num4 = $('#num4').val();
            var num5 = $('#num5').val();
            var num6 = $('#num6').val();
            var modelo = new String(Frp[0]);
            //agrego las variables en el arreglo
            Frp.push(num1, num2, num3, num4, num5, num6);     
            

            if(modelo =="Presencialidad Completa"){


                // Datos Json que se exportarán
          const jsonData = [
        {pregunta:'1',respuesta:Frp[0]},
        {pregunta:'2',respuesta:Frp[1]},
        {pregunta:'3',respuesta:Frp[2]},
        {pregunta:'4',respuesta:Frp[3]},
        {pregunta:'5',respuesta:Frp[4]},
        {pregunta:'6',respuesta:Frp[5]},
        {pregunta:'7',respuesta:Frp[6]},
        {pregunta:'8',respuesta:Frp[7]},
        {pregunta:'9',respuesta:Frp[8]},
        {pregunta:'10',respuesta:Frp[9]},
        {pregunta:'11',respuesta:Frp[10]},
        {pregunta:'12',respuesta:Frp[11]},

      ]
      //Encabezado de la columna
      let str = '<tr> <td> pregunta </td> <td> respuesta </td></tr>';
      // Recorrido de bucle, agregar etiqueta tr a cada fila, agregar etiqueta td a cada celda
      for(let i = 0 ; i < jsonData.length ; i++ ){
        str+='<tr>';
        for(let item in jsonData[i]){
            // Agrega \ t para evitar que la tabla muestre notación científica u otros formatos
            str+=`<td>${ jsonData[i][item] + '\t'}</td>`;     
        }
        str+='</tr>';
      }
      // Nombre de la hoja de trabajo
      let worksheet = 'Sheet1'
      let uri = 'data:application/vnd.ms-excel;base64,';
 
      // Datos de plantilla de formulario descargados
      let template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
      xmlns:x="urn:schemas-microsoft-com:office:excel" 
      xmlns="http://www.w3.org/TR/REC-html40">
      <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
        <x:Name>${worksheet}</x:Name>
        <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
        </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
        </head><body><table>${str}</table></body></html>`;
      // Descargar plantilla
      window.location.href = uri + base64(template);
            alert("Respuestas enviadas con éxito");
            }

        if(modelo !="Presencialidad Completa")
            //animacion esconder y mostrar
             console.log(Frp);
             $(".dataForm2").hide();
             $("#nextBtn").hide();
             $("#label2").hide();
             $(".dataForm3").show();}
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
            var cantidadpr = Frp[7];
            var cantidadgrupos= Frp[6];
            var cantidadDocentes= Frp[8];
            console.log(cantidadpr);
            var p1 = parseInt($('#num7').val());
            var p2 = parseInt($('#num8').val());
            var p3 = parseInt($('#num9').val());
            var p4 = parseInt($('#num10').val());
            var p5 = parseInt($('#num11').val());
            var p6 = parseInt($('#num12').val());
            var p7 = parseInt($('#num13').val());
            var p8 = parseInt($('#num14').val());
            var p9 = parseInt($('#num15').val());
            var p10 = parseInt($('#num16').val());
            var p11 = parseInt($('#num17').val());
            var p12 = parseInt($('#num18').val());
            var d1 = parseInt($('#num19').val());
            var d2 = parseInt($('#num20').val());
            var d3 = parseInt($('#num21').val());
            var g1 = parseInt($('#num22').val());
            var g2 = parseInt($('#num23').val());
            var g3 = parseInt($('#num24').val());
            var g4 = parseInt($('#num25').val());
            var g5 = parseInt($('#num26').val());
            var g6 = parseInt($('#num27').val());
            var g7 = parseInt($('#num28').val());
            var g8 = parseInt($('#num29').val());
            var g9 = parseInt($('#num30').val());
            var g10 = parseInt($('#num32').val());
            var g11 = parseInt($('#num33').val());

           if((p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12)!=cantidadpr)
            {alert("la suma de todos los estudiantes no es igual a la catidad total");}
            if(d1+d2+d3!=cantidadDocentes)
            {alert("la suma de todos los docentes de los grupos no es igual al total de docentes");}
            if((g1+g2+g3+g4+g5+g6+g7+g8+g9+g10+g11!=cantidadgrupos)){
                alert("la suma de los grupos por grado no es igual al total de grupos");
            }
            if((g1+g2+g3+g4+g5+g6+g7+g8+g9+g10+g11==cantidadgrupos)&&(p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12)==cantidadpr
               && d1+d2+d3==cantidadDocentes){




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
            $("#label3").hide();
             $(".dataForm4").show();
        }}
    
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

             var hogT = parseInt($('#num34').val());
              var h1 = parseInt($('#num35').val());
              var h2 = parseInt($('#num36').val());
              var h3 = parseInt($('#num37').val());
              var h4 = parseInt($('#num38').val());
              var h5 = parseInt($('#num39').val());
              var h6 = parseInt($('#num40').val());
              var h7 = parseInt($('#num41').val());
              var periT = parseInt($('#num42').val());
              var peripres = parseInt($('#num43').val());
              var pe1 = parseInt($('#num44').val());
              var pe2 = parseInt($('#num45').val());
              var pe3 = parseInt($('#num46').val());
              var pe4 = parseInt($('#num47').val());
              console.log(hogT);
              console.log(peripres);
              if((h1+h2+h3+h4+h5+h6+h7)!=hogT){
                alert("la suma de los hogares no es igual al total")
              } 

              if(periT<peripres){
                alert("la catidad de perifericos prestados no puede superar a la cantidad total");
              }

              if((pe1+pe2+pe3+pe4)!=peripres){
                alert("la suma de todos los perifericos prestados no es igual al total")
              }
              if((pe1+pe2+pe3+pe4)==peripres&&periT>=peripres&&(h1+h2+h3+h4+h5+h6+h7)==hogT){

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
            $("#label4").hide();
             $(".dataForm5").show();

        }}
    
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
            console.log(Frp);
            
            alert("Respuestas enviadas con éxito");

            // Datos Json que se exportarán
      const jsonData = [
        {pregunta:'1',respuesta:Frp[0]},
        {pregunta:'2',respuesta:Frp[1]},
        {pregunta:'3',respuesta:Frp[2]},
        {pregunta:'4',respuesta:Frp[3]},
        {pregunta:'5',respuesta:Frp[4]},
        {pregunta:'6',respuesta:Frp[5]},
        {pregunta:'7',respuesta:Frp[6]},
        {pregunta:'8',respuesta:Frp[7]},
        {pregunta:'9',respuesta:Frp[8]},
        {pregunta:'10',respuesta:Frp[9]},
        {pregunta:'11',respuesta:Frp[10]},
        {pregunta:'12',respuesta:Frp[11]},
        {pregunta:'13',respuesta:Frp[12]},
        {pregunta:'14',respuesta:Frp[13]},
        {pregunta:'15',respuesta:Frp[14]},
        {pregunta:'16',respuesta:Frp[15]},
        {pregunta:'17',respuesta:Frp[16]},
        {pregunta:'18',respuesta:Frp[17]},
        {pregunta:'19',respuesta:Frp[18]},
        {pregunta:'20',respuesta:Frp[19]},
        {pregunta:'21',respuesta:Frp[20]},
        {pregunta:'22',respuesta:Frp[21]},
        {pregunta:'23',respuesta:Frp[22]},
        {pregunta:'24',respuesta:Frp[23]},
        {pregunta:'25',respuesta:Frp[24]},
        {pregunta:'26',respuesta:Frp[25]},
        {pregunta:'27',respuesta:Frp[26]},
        {pregunta:'28',respuesta:Frp[27]},
        {pregunta:'29',respuesta:Frp[28]},
        {pregunta:'30',respuesta:Frp[29]},
        {pregunta:'31',respuesta:Frp[30]},
        {pregunta:'32',respuesta:Frp[31]},
        {pregunta:'33',respuesta:Frp[32]},
        {pregunta:'34',respuesta:Frp[33]},
        {pregunta:'35',respuesta:Frp[34]},
        {pregunta:'36',respuesta:Frp[35]},
        {pregunta:'37',respuesta:Frp[36]},
        {pregunta:'38',respuesta:Frp[37]},
        {pregunta:'39',respuesta:Frp[38]},
        {pregunta:'40',respuesta:Frp[39]},
        {pregunta:'41',respuesta:Frp[40]},
        {pregunta:'42',respuesta:Frp[41]},
        {pregunta:'43',respuesta:Frp[42]},
        {pregunta:'44',respuesta:Frp[43]},
        {pregunta:'45',respuesta:Frp[44]},
        {pregunta:'46',respuesta:Frp[45]},
        {pregunta:'47',respuesta:Frp[46]},
        {pregunta:'48',respuesta:Frp[47]},
        {pregunta:'49',respuesta:Frp[48]},
        {pregunta:'50',respuesta:Frp[49]},
        {pregunta:'51',respuesta:Frp[50]},
        {pregunta:'52',respuesta:Frp[51]},
        {pregunta:'53',respuesta:Frp[52]},
        {pregunta:'54',respuesta:Frp[53]},
        {pregunta:'55',respuesta:Frp[54]},
        {pregunta:'56',respuesta:Frp[55]},
        {pregunta:'57',respuesta:Frp[56]},
        {pregunta:'58',respuesta:Frp[57]},
        {pregunta:'59',respuesta:Frp[58]},
        {pregunta:'60',respuesta:Frp[59]},
        {pregunta:'61',respuesta:Frp[60]},
        {pregunta:'62',respuesta:Frp[61]},
        {pregunta:'63',respuesta:Frp[62]},
        {pregunta:'64',respuesta:Frp[63]},
        {pregunta:'65',respuesta:Frp[64]},
        {pregunta:'66',respuesta:Frp[65]},
        {pregunta:'67',respuesta:Frp[66]},
        {pregunta:'68',respuesta:Frp[67]},
        {pregunta:'69',respuesta:Frp[68]},
        {pregunta:'70',respuesta:Frp[69]},
        {pregunta:'71',respuesta:Frp[70]},
        {pregunta:'72',respuesta:Frp[71]},
        {pregunta:'73',respuesta:Frp[72]},
        {pregunta:'74',respuesta:Frp[73]},
        {pregunta:'75',respuesta:Frp[74]},
        {pregunta:'76',respuesta:Frp[75]},
        {pregunta:'77',respuesta:Frp[76]},
        {pregunta:'78',respuesta:Frp[77]},
        {pregunta:'79',respuesta:Frp[78]},
        {pregunta:'80',respuesta:Frp[79]},
        {pregunta:'81',respuesta:Frp[80]},
        {pregunta:'82',respuesta:Frp[81]},
        {pregunta:'83',respuesta:Frp[82]},

      ]
      //Encabezado de la columna
      let str = '<tr> <td> pregunta </td> <td> respuesta </td></tr>';
      // Recorrido de bucle, agregar etiqueta tr a cada fila, agregar etiqueta td a cada celda
      for(let i = 0 ; i < jsonData.length ; i++ ){
        str+='<tr>';
        for(let item in jsonData[i]){
            // Agrega \ t para evitar que la tabla muestre notación científica u otros formatos
            str+=`<td>${ jsonData[i][item] + '\t'}</td>`;     
        }
        str+='</tr>';
      }
      // Nombre de la hoja de trabajo
      let worksheet = 'Sheet1'
      let uri = 'data:application/vnd.ms-excel;base64,';
 
      // Datos de plantilla de formulario descargados
      let template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
      xmlns:x="urn:schemas-microsoft-com:office:excel" 
      xmlns="http://www.w3.org/TR/REC-html40">
      <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
        <x:Name>${worksheet}</x:Name>
        <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
        </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
        </head><body><table>${str}</table></body></html>`;
      // Descargar plantilla
      window.location.href = uri + base64(template)
            
        }
    
        else
        {  
            alert("Por favor responda todas las preguntas");
        }
 }
// Codificación base64 de salida
    function base64 (s) { 
    return window.btoa(unescape(encodeURIComponent(s)));
        }

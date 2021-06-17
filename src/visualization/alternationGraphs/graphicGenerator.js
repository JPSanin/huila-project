//Selects for refreshing graphs
let municipalitySelectGenMethods = document.getElementById("municipalitySelect");
let institutionSelectGenMethods = document.getElementById("institutionSelect");
let campusSelectGenMethods = document.getElementById("campusSelect");


//Graph Canvases and Samples
let alternationgraph1 = document.getElementById("preescolarDepartment");
let alternationsampleGraph1 = document.getElementById("preescolarDepartmentSample");
let alternationdisplayGraph1;

let alternationgraph2 = document.getElementById("primariaDepartment");
let alternationsampleGraph2 = document.getElementById("primariaDepartmentSample");
let alternationdisplayGraph2;


let alternationgraph3 = document.getElementById("secundariaDepartment");
let alternationsampleGraph3 = document.getElementById("secundariaDepartmentSample");
let alternationdisplayGraph3;

let alternationgraph4 = document.getElementById("mediaDepartment");
let alternationsampleGraph4 = document.getElementById("mediaDepartmentSample");
let alternationdisplayGraph4;

let alternationgraph5 = document.getElementById("grupoPreDepartment");
let alternationsampleGraph5 = document.getElementById("grupoPreDepartmentSample");
let alternationdisplayGraph5;

let alternationgraph6 = document.getElementById("grupoPriDepartment");
let alternationsampleGraph6 = document.getElementById("grupoPriDepartmentSample");
let alternationdisplayGraph6;


window.onload = function () {
    initializeGraphs();
};

function initializeGraphs() {
    let rawData = "";

    $.ajax(dataBase).done(function (result) {
        rawData = result;
        let data = Papa.parse(rawData, configData);
        initialStateGraph1(data);
        initialStateGraph2(data);
        /*initialStateGraph3(data);
        initialStateGraph4(data);
        initialStateGraph5(data);
        initialStateGraph6(data);*/

    });
}


function initialStateGraph1(info) {
    /**
     * Toman los datos
     */
    let showData = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {

            showData[0] += parseInt(element[20]);

        }
        if (element[0] == "BARAYA") {

            showData[1] += parseInt(element[20]);

        }
        if (element[0] == "ISNOS") {

            showData[2] += parseInt(element[20]);

        }
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);



// Se crea el grrafico
const data = {
    labels: ['Agrado', 'Baraya', 'Isnos'],
    datasets: [
      {
        label: 'Preescolar',
        data: [122, 81, 8],
        backgroundColor: ['#003F63', '#008892', '#FF6766'],
      },
    ]
  };
  
  const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Número de estudiantes de preescolar en alternancia por departamento'
          }
        }
      },
    };
  

    let alternationdisplayGraph1 = new Chart(alternationgraph1, config);
    alternationsampleGraph1.innerHTML = "Total Muestra: " + sample;
    alternationdisplayGraph1.canvas.parentNode.style.height = '300px';
    alternationdisplayGraph1.canvas.parentNode.style.width = '700px';
}




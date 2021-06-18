//Selects for refreshing graphs
let municipalitySelectGenMethods = document.getElementById("municipalitySelect");
let institutionSelectGenMethods = document.getElementById("institutionSelect");
let campusSelectGenMethods = document.getElementById("campusSelect");


//Graph Canvases and Samples
let campusgraph1 = document.getElementById("campusDataModality");
let campussampleGraph1 = document.getElementById("campusDataModalitySample");
let campusdisplayGraph1;

let campusgraph2 = document.getElementById("campusDataAttendance");
let campussampleGraph2 = document.getElementById("campusDataAttendanceSample");
let campusdisplayGraph2;


let campusgraph3 = document.getElementById("campusDataBiosegurity");
let campussampleGraph3 = document.getElementById("campusDataBioseguritySample");
let campusdisplayGraph3;

let campusgraph4 = document.getElementById("campusDataProtocol");
let campussampleGraph4 = document.getElementById("campusDataProtocolSample");
let campusdisplayGraph4;

let campusgraph5 = document.getElementById("campusDataVersus");
let campussampleGraph5 = document.getElementById("campusDataVersusSample");
let campusdisplayGraph5;



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
        initialStateGraph3(data);
        initialStateGraph4(data);
        initialStateGraph5(data);
    });
}



function initialStateGraph1(info) {
    let showData = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[7] == "Alternancia") {

            showData[0] += 1;

        }
        if (element[7] == "Remoto") {

            showData[1] += 1;

        }
        if (element[7] == "Presencialidad completa") {

            showData[2] += 1;

        }
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ['Alternancia', 'Remoto', 'Presencial'],
        datasets: [{
            label: 'My First Dataset',
            data: showData,
            backgroundColor: ['#003F63', '#008892', '#FF6766'],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Modalidad de las sedes en el departamento'
                }
            }
        },
    };


    campusdisplayGraph1 = new Chart(campusgraph1, config);
    campussampleGraph1.innerHTML = "Total Muestra: " + sample;
    campusdisplayGraph1.canvas.parentNode.style.height = '420px';
    campusdisplayGraph1.canvas.parentNode.style.width = '420px';
}

function initialStateGraph2(info) {
    let showData = [0, 0, 0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[7] == "Alternancia") {
            if (element[10] == "1") {
                showData[0] += 1;
            }
            if (element[10] == "2") {
                showData[1] += 1;
            }
            if (element[10] == "3") {
                showData[2] += 1;
            }
            if (element[10] == "4") {
                showData[3] += 1;
            }
            if (element[10] == "5") {
                showData[4] += 1;
            }
        }


    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ['1 Dia', '2 Dias', '3 Dias', '4 Dias', '5 Dias'],
        datasets: [{
            label: 'My First Dataset',
            data: showData,
            backgroundColor: ['#003F63', '#008892', '#FF6766', '#FDC967', '#C5C789', '#83B8D7'],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Cantidad de días asistiendo a las sedes para aquellos que están en alternacia'
                }
            }
        },
    };


    campusdisplayGraph2 = new Chart(campusgraph2, config);
    campussampleGraph2.innerHTML = "Total Muestra: " + sample;
    campusdisplayGraph2.canvas.parentNode.style.height = '420px';
    campusdisplayGraph2.canvas.parentNode.style.width = '420px';
}

function initialStateGraph3(info) {
    let showData = [0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[8] == "Sí") {
            showData[0] += 1;
        }
        if (element[8] == "No") {
            showData[1] += 1;
        }
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ['Sí hay un diagnóstico de bioseguridad',
            'No hay un diagnóstico de bioseguridad'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [19, 15],
            backgroundColor: ['#003F63', '#008892', '#FF6766', '#FDC967', '#C5C789', '#83B8D7'],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Diagnósticos de bioseguridad en las sedes'
                }
            }
        },
    };


    campusdisplayGraph3 = new Chart(campusgraph3, config);
    campussampleGraph3.innerHTML = "Total Muestra: " + sample;
    campusdisplayGraph3.canvas.parentNode.style.height = '420px';
    campusdisplayGraph3.canvas.parentNode.style.width = '420px';
}

function initialStateGraph4(info) {
    let showData = [0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[9] == "Sí") {
            showData[0] += 1;
        }
        if (element[9] == "No") {
            showData[1] += 1;
        }
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: [
          'Si se realizó un ajuste de protocolos de bioseguridad',
          'No se realizó un ajuste de protocolos de bioseguridad'],
        datasets: [{
          label: 'My First Dataset',
          data: [19, 15],
          backgroundColor: ['#003F63', '#008892', '#FF6766', '#FDC967', '#C5C789', '#83B8D7'],
          hoverOffset: 4
        }]
      };
    
      const config = {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Revisión y ajuste de los protocolos de bioseguridad'
            }
          }
        },
      };


    campusdisplayGraph4= new Chart(campusgraph4, config);
    campussampleGraph4.innerHTML = "Total Muestra: " + sample;
    campusdisplayGraph4.canvas.parentNode.style.height = '420px';
    campusdisplayGraph4.canvas.parentNode.style.width = '420px';
}

function initialStateGraph5(info) {
    let showData = [0, 0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];

        if (element[7] == "Alternancia" || element[7] == "Presencialidad completa") {
            if (element[9] == "Sí") {
                showData[0] += 1;
            }
            if (element[9] == "No") {
                showData[1] += 1;
            }
        }
        if (element[7] == "Remoto") {
            if (element[9] == "Sí") {
                showData[2] += 1;
            }
            if (element[9] == "No") {
                showData[3] += 1;
            }
        }
       
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

 
const data = {
    labels: [
      'Alternancia/Presencialidad y Ajuste de protocolos',
      'Alternancia/Presencialidad y No ajuste de protocolos',
      'Remoto y No ajuste de protocolos',
      'Remoto y Si ajuste de protocolos'],
    datasets: [{
      label: 'My First Dataset',
      data: showData,
      backgroundColor: ['#003F63', '#008892', '#FF6766', '#FDC967', '#C5C789', '#83B8D7'],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Modalidad de las sedes Vs protocolos de bioseguridad'
        }
      }
    },
  };


    campusdisplayGraph5= new Chart(campusgraph5, config);
    campussampleGraph5.innerHTML = "Total Muestra: " + sample;
    campusdisplayGraph5.canvas.parentNode.style.height = '420px';
    campusdisplayGraph5.canvas.parentNode.style.width = '420px';
}

municipalitySelectGenMethods.addEventListener("change", function () {
    if (municipalitySelectGenMethods.value == "MUNICIPIO") {
        destroyGraphs();
        initializeGraphs();
        showGraphs();
    } else {
        destroyGraphs();
        createMunicipalityGraphs(municipalitySelectGenMethods.value);
    }
});

function createMunicipalityGraphs(municipality) {
    let rawData = "";

    $.ajax(dataBase).done(function (result) {
        rawData = result;
        let data = Papa.parse(rawData, configData);
        municipalityGraph1(data, municipality);
       /* municipalityGraph2(data, municipality);
        municipalityGraph3(data, municipality);
        municipalityGraph4(data, municipality);
        municipalityGraph5(data, municipality);*/
 
    });

}


function municipalityGraph1(info, municipality) {
    let showData = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[7] == "Alternancia") {

            showData[0] += 1;

        }
        if (element[7] == "Remoto") {

            showData[1] += 1;

        }
        if (element[7] == "Presencialidad completa") {

            showData[2] += 1;

        }
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ['Alternancia', 'Remoto', 'Presencial'],
        datasets: [{
            label: 'My First Dataset',
            data: showData,
            backgroundColor: ['#003F63', '#008892', '#FF6766'],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Modalidad de las sedes en el municipio'
                }
            }
        },
    };


    let campusdisplayGraph1 = new Chart(campusgraph1, config);
    campussampleGraph1.innerHTML = "Total Muestra: " + sample;
    campusdisplayGraph1.canvas.parentNode.style.height = '420px';
    campusdisplayGraph1.canvas.parentNode.style.width = '420px';
}



function destroyGraphs() {
    campusdisplayGraph1.destroy();
    campusdisplayGraph2.destroy();
    campusdisplayGraph3.destroy();
    campusdisplayGraph4.destroy();
    campusdisplayGraph5.destroy();
}
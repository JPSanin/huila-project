//Selects for refreshing graphs
let municipalitySelectGenMethods = document.getElementById("municipalitySelect");
let institutionSelectGenMethods = document.getElementById("institutionSelect");
let campusSelectGenMethods = document.getElementById("campusSelect");


//Graph Canvases and Samples
let graph1 = document.getElementById("graph1");
let sampleGraph1 = document.getElementById("sampleGraph1");
let displayGraph1;

let graph2 = document.getElementById("graph2");
let sampleGraph2 = document.getElementById("sampleGraph2");
let displayGraph2;

let graph3 = document.getElementById("graph3");
let sampleGraph3 = document.getElementById("sampleGraph3");
let displayGraph3;

let graph4 = document.getElementById("graph4");
let sampleGraph4 = document.getElementById("sampleGraph4");
let displayGraph4;

let graph5 = document.getElementById("graph5");
let sampleGraph5 = document.getElementById("sampleGraph5");
let displayGraph5;

let graph6 = document.getElementById("graph6");
let sampleGraph6 = document.getElementById("sampleGraph6");
let displayGraph6;

let graph7 = document.getElementById("graph7");
let sampleGraph7 = document.getElementById("sampleGraph7");
let displayGraph7;


let graph8 = document.getElementById("graph8");
let sampleGraph8 = document.getElementById("sampleGraph8");
let displayGraph8;


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
        initialStateGraph6(data);
        initialStateGraph7(data);
        initialStateGraph8(data);
    });
}

function initialStateGraph1(info) {

    let showData = [0, 0, 0, 0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {
        const element = info.data[index];

        showData[0] += parseInt(element[48]);
        showData[1] += parseInt(element[49]);
        showData[2] += parseInt(element[50]);
        showData[3] += parseInt(element[51]);
        showData[4] += parseInt(element[52]);
        showData[5] += parseInt(element[53]);
        showData[6] += parseInt(element[54]);

    }
    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);


    const dataGraph1 = {
        labels: ['Más de 6 estudiantes', '6 estudiantes', '5 estudiantes', '4 estudiantes',
            '3 estudiantes', '2 estudiantes', '1 estudiante'
        ],
        datasets: [{
            label: 'Dataset 1',
            data: showData,
            backgroundColor: colors,
        }, ]
    };

    const configGraph1 = {
        type: 'bar',
        data: dataGraph1,
        options: {
            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Número de hogares sin servicio de internet por número de estudiantes'
                }
            }
        },
    };

    displayGraph1 = new Chart(graph1, configGraph1);
    sampleGraph1.innerHTML = "Total Muestra: " + sample;
    displayGraph1.canvas.parentNode.style.height = '300px';
    displayGraph1.canvas.parentNode.style.width = '700px';
}

function initialStateGraph2(info) {
    let showData = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {

            showData[0] += parseInt(element[47]);

        }
        if (element[0] == "BARAYA") {

            showData[1] += parseInt(element[47]);

        }
        if (element[0] == "ISNOS") {

            showData[2] += parseInt(element[47]);

        }
    }

    let sample2 = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const dataGraph2 = {
        labels: ["Agrado", "Baraya", "Isnos"],
        datasets: [{
            label: 'Dataset 1',
            data: showData,
            borderColor: colors,
            backgroundColor: colors,
        }, ]
    };

    const configGraph2 = {
        type: 'bar',
        data: dataGraph2,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Número de hogares sin servicios de internet por municipio'
                }
            }
        },
    };

    displayGraph2 = new Chart(graph2, configGraph2);
    sampleGraph2.innerHTML = "Total Muestra: " + sample2;
    displayGraph2.canvas.parentNode.style.height = '300px';
    displayGraph2.canvas.parentNode.style.width = '700px';
}

function initialStateGraph3(info) {

    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];
        showData[0] += parseInt(element[57]);
        showData[1] += parseInt(element[58]);
        showData[2] += parseInt(element[59]);
        showData[3] += parseInt(element[60]);

    }

    let sample3 = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const dataGraph3 = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const configGraph3 = {
        type: 'bar',
        data: dataGraph3,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              display: false,
            },
            title: {
              display: true,
              text: 'Número de periféricos prestados en el departamento por nivel'
            }
          }
        },
      };
  
      displayGraph3 = new Chart(graph3, configGraph3);
      sampleGraph3.innerHTML="Total Muestra: "+ sample3; 
      displayGraph3.canvas.parentNode.style.height = '300px';
      displayGraph3.canvas.parentNode.style.width = '700px';
}

function initialStateGraph4(info) {
    let showData1 = [0, 0, 0];
    let showData2 = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {

            showData1[0] += parseInt(element[56]);
            showData2[0] += parseInt(element[55]);

        }
        if (element[0] == "BARAYA") {

            showData1[1] += parseInt(element[56]);
            showData2[1] += parseInt(element[55]);

        }
        if (element[0] == "ISNOS") {

            showData1[2] += parseInt(element[56]);
            showData2[2] += parseInt(element[55]);

        }
    }

    for (let i = 0; i < showData2.length; i++) {
        showData2[i]= showData2[i]-showData1[i];
    }
    let sample4 = showData1.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);
    sample4+=showData2.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);


    const dataGraph4 = {
        labels: ["Agrado", "Baraya" , "Isnos"],
        datasets: [
          {
            label: 'Prestados',
            data: showData1,
            backgroundColor:'#033F62',
          },
          {
            label: 'Por prestar',
            data: showData2,
            backgroundColor: '#60B5BB',
          },
        ]
      };
      
      const configGraph4 = {
          type: 'bar',
          data: dataGraph4,
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Total de periféricos prestados vs por prestar en el departamento por municipios '
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            }
          }
        };
    
        displayGraph4 = new Chart(graph4, configGraph4);
        sampleGraph4.innerHTML="Total Muestra: "+ sample4; 
        displayGraph4.canvas.parentNode.style.height = '300px';
        displayGraph4.canvas.parentNode.style.width = '700px';
}

function initialStateGraph5(info) {
    let showData = [0, 0];


    for (let index = 2; index < 36; index++) {

        const element = info.data[index];
        showData[0] += parseInt(element[62]);
        if(element[7]=='Alternancia' || element[7]=='Remoto'){
        showData[1] += parseInt(element[12]);
        }
        
 
    }

    showData[1]=  showData[1]- showData[0];

    let sample5 = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const dataGraph5 = {
        labels: ['Estudiantes que han recibido Sim-card ', 
                  'Estudiantes que no han recibido Sim-card'],
        datasets: [
          {
            label: 'Dataset 1',
            data: showData,
            backgroundColor: colors,
            hoverOffset: 4,
          }
        ]
      };
      
      const configGraph5 = {
          type: 'doughnut',
          data: dataGraph5,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Sim-cards en en el departamento'
              }
            }
          },
        };
    
        displayGraph5 = new Chart(graph5, configGraph5);
        sampleGraph5.innerHTML="Total Muestra: "+ sample5; 
        displayGraph5.canvas.parentNode.style.height = '250px';
        displayGraph5.canvas.parentNode.style.width = '350px';
}

function initialStateGraph6(info) {
    let showData1 = [0, 0, 0];
    let showData2 = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {
            showData1[0] += parseInt(element[62]);
            if(element[7]=='Alternancia' || element[7]=='Remoto'){
                showData2[0]  += parseInt(element[12]);
            }
        }
        if (element[0] == "BARAYA") {
            showData1[1] += parseInt(element[62]);
            if(element[7]=='Alternancia' || element[7]=='Remoto'){
                showData2[1]  += parseInt(element[12]);
            }

        }
        if (element[0] == "ISNOS") {
            showData1[2] += parseInt(element[62]);
            if(element[7]=='Alternancia' || element[7]=='Remoto'){
                showData2[2]  += parseInt(element[12]);
            }

        }
    }
   
    for (let i = 0; i < showData2.length; i++) {
        showData2[i]= showData2[i]-showData1[i];
    }
  
    let sample6 = showData1.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);
    sample6+=showData2.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);


    const dataGraph6 = {
        labels: ["Agrado", "Baraya" , "Isnos"],
        datasets: [
          {
            label: 'Estudiantes que no han recibido sim-card',
            data: showData2,
            backgroundColor:'#033F62',
          },
          {
            label: 'Estudiantes que han recibido sim-card',
            data: showData1,
            backgroundColor: '#60B5BB',
          },
        ]
      };
      
      const configGraph6 = {
          type: 'bar',
          data: dataGraph6,
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Sim-cards en en el departamento por municipio'
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            }
          }
        };
    
        displayGraph6 = new Chart(graph6, configGraph6);
        sampleGraph6.innerHTML="Total Muestra: "+ sample6; 
        displayGraph6.canvas.parentNode.style.height = '300px';
        displayGraph6.canvas.parentNode.style.width = '700px';
}

function initialStateGraph7(info) {
    let showData = [0, 0];


    for (let index = 2; index < 36; index++) {

        const element = info.data[index];
        showData[0] += parseInt(element[61]);
        if(element[7]=='Alternancia' || element[7]=='Remoto'){
        showData[1] += parseInt(element[12]);
        }
        
 
    }

    showData[1]=  showData[1]- showData[0];

    let sample7 = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);
  




    const dataGraph7 = {
        labels: ['Requieren pago de envío de materiales', 
                   'No requieren pago de envío de materiales'],
        datasets: [
          {
            label: 'Dataset 1',
            data: showData,
            backgroundColor: colors,
            hoverOffset: 4,
          }
        ]
      };
      
      const configGraph7 = {
          type: 'doughnut',
          data: dataGraph7,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Estudiantes pago de envio de manteriales en el departamento'
              }
            }
          },
        };
    
        
    displayGraph7 = new Chart(graph7, configGraph7);
    sampleGraph7.innerHTML="Total Muestra: "+ sample7; 
    displayGraph7.canvas.parentNode.style.height = '250px';
    displayGraph7.canvas.parentNode.style.width = '350px';
}

function initialStateGraph8(info) {
    let showData1 = [0, 0, 0];
    let showData2 = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {
            showData1[0] += parseInt(element[61]);
            if(element[7]=='Alternancia' || element[7]=='Remoto'){
                showData2[0]  += parseInt(element[12]);
            }
        }
        if (element[0] == "BARAYA") {
            showData1[1] += parseInt(element[61]);
            if(element[7]=='Alternancia' || element[7]=='Remoto'){
                showData2[1]  += parseInt(element[12]);
            }

        }
        if (element[0] == "ISNOS") {
            showData1[2] += parseInt(element[61]);
            if(element[7]=='Alternancia' || element[7]=='Remoto'){
                showData2[2]  += parseInt(element[12]);
            }

        }
    }
   
    for (let i = 0; i < showData2.length; i++) {
        showData2[i]= showData2[i]-showData1[i];
    }
  
    let sample8 = showData1.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);
    sample8+=showData2.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);


    const dataGraph8 = {
        labels: ["Agrado", "Baraya" , "Isnos"],
        datasets: [
          {
            label: 'Requieren pago',
            data: showData1,
            backgroundColor:'#033F62',
          },
          {
            label: 'No Requieren pago',
            data: showData2,
            backgroundColor: '#60B5BB',
          },
        ]
      };
      
      const configGraph8 = {
          type: 'bar',
          data: dataGraph8,
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Pago de envio de materiales en el departamento por municipio'
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            }
          }
        };
    
    displayGraph8 = new Chart(graph8, configGraph8);
    sampleGraph8.innerHTML="Total Muestra: "+ sample8; 
    displayGraph8.canvas.parentNode.style.height = '300px';
    displayGraph8.canvas.parentNode.style.width = '700px'
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
      municipalityGraph2(data, municipality);
      municipalityGraph3(data, municipality);
      municipalityGraph4(data, municipality);
      municipalityGraph5(data, municipality);
      municipalityGraph6(data, municipality);
      municipalityGraph7(data, municipality);
      municipalityGraph8(data, municipality);
  });
}

function municipalityGraph1(info, municipality){

  let showData = [0, 0, 0, 0, 0, 0, 0];

  for (let index = 2; index < 36; index++) {
      const element = info.data[index];
      if(element[0]==municipality){
      showData[0] += parseInt(element[48]);
      showData[1] += parseInt(element[49]);
      showData[2] += parseInt(element[50]);
      showData[3] += parseInt(element[51]);
      showData[4] += parseInt(element[52]);
      showData[5] += parseInt(element[53]);
      showData[6] += parseInt(element[54]);
      }

      

  }
  let sample = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);


  const dataGraph1 = {
      labels: ['Más de 6 estudiantes', '6 estudiantes', '5 estudiantes', '4 estudiantes',
          '3 estudiantes', '2 estudiantes', '1 estudiante'
      ],
      datasets: [{
          label: 'Dataset 1',
          data: showData,
          backgroundColor: colors,
      }, ]
  };

  const configGraph1 = {
      type: 'bar',
      data: dataGraph1,
      options: {
          indexAxis: 'y',
          elements: {
              bar: {
                  borderWidth: 2,
              }
          },
          responsive: true,
          plugins: {
              legend: {
                  position: 'right',
                  display: false,
              },
              title: {
                  display: true,
                  text: 'Número de hogares sin servicio de internet por número de estudiantes'
              }
          }
      },
  };

  displayGraph1 = new Chart(graph1, configGraph1);
  sampleGraph1.innerHTML = "Total Muestra: " + sample;
  displayGraph1.canvas.parentNode.style.height = '300px';
  displayGraph1.canvas.parentNode.style.width = '700px';
}

function municipalityGraph2(info, municipality){
  let filteredData = [];
    let labelNames = []
    let showData = [0];

    for (let index = 0; index < info.data.length; index++) {
        const element = info.data[index];
        if (element[0] == municipality) {
            filteredData.push(element);
        }
    }


    for (let index = 0; index < filteredData.length; index++) {
        if (index == 0) {
            labelNames.push(filteredData[index][1]);
        } else if (filteredData[index][1] != labelNames[labelNames.length - 1]) {
            labelNames.push(filteredData[index][1]);
        }
    }

    for (let index = 0; index < filteredData.length; index++) {
        const element = filteredData[index];
        if (element[1] != labelNames[showData.length - 1] && showData.length < labelNames.length) {
            showData.push(0);
        }
        if (element[1] == labelNames[showData.length - 1]) {
            showData[showData.length - 1] += parseInt(element[47]);
        }
    }

    let sample2 = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const dataGraph2 = {
        labels: labelNames,
        datasets: [{
            label: 'Dataset 1',
            data: showData,
            borderColor: colors,
            backgroundColor: colors,
        }, ]
    };

    const configGraph2 = {
        type: 'bar',
        data: dataGraph2,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Número de hogares sin servicios de internet por institución'
                }
            }
        },
    };

    displayGraph2 = new Chart(graph2, configGraph2);
    sampleGraph2.innerHTML = "Total Muestra: " + sample2;
    displayGraph2.canvas.parentNode.style.height = '300px';
    displayGraph2.canvas.parentNode.style.width = '700px';
}

function municipalityGraph3(info, municipality){
  let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];
        if(element[0]==municipality){
        showData[0] += parseInt(element[57]);
        showData[1] += parseInt(element[58]);
        showData[2] += parseInt(element[59]);
        showData[3] += parseInt(element[60]);
        }
        

    }

    let sample3 = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const dataGraph3 = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const configGraph3 = {
        type: 'bar',
        data: dataGraph3,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              display: false,
            },
            title: {
              display: true,
              text: 'Número de periféricos prestados en el municipio por nivel'
            }
          }
        },
      };
  
      displayGraph3 = new Chart(graph3, configGraph3);
      sampleGraph3.innerHTML="Total Muestra: "+ sample3; 
      displayGraph3.canvas.parentNode.style.height = '300px';
      displayGraph3.canvas.parentNode.style.width = '700px';
}

function municipalityGraph4(info, municipality){

  let filteredData = [];
  let labelNames = []
  let showData1 = [0];
  let showData2 = [0];

  for (let index = 0; index < info.data.length; index++) {
      const element = info.data[index];
      if (element[0] == municipality) {
          filteredData.push(element);
      }
  }


  for (let index = 0; index < filteredData.length; index++) {
      if (index == 0) {
          labelNames.push(filteredData[index][1]);
      } else if (filteredData[index][1] != labelNames[labelNames.length - 1]) {
          labelNames.push(filteredData[index][1]);
      }
  }

  for (let index = 0; index < filteredData.length; index++) {
      const element = filteredData[index];
      if (element[1] != labelNames[showData1.length - 1] && showData1.length < labelNames.length) {
        showData1.push(0);
        showData2.push(0);
      }
      if (element[1] == labelNames[showData1.length - 1]) {
          showData1[showData1.length - 1] += parseInt(element[56]);
          showData2[showData2.length - 1] += parseInt(element[55]);
      }
  }


  for (let i = 0; i < showData2.length; i++) {
      showData2[i]= showData2[i]-showData1[i];
  }
  let sample4 = showData1.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);
  sample4+=showData2.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);


  const dataGraph4 = {
      labels:labelNames,
      datasets: [
        {
          label: 'Prestados',
          data: showData1,
          backgroundColor:'#033F62',
        },
        {
          label: 'Por prestar',
          data: showData2,
          backgroundColor: '#60B5BB',
        },
      ]
    };
    
    const configGraph4 = {
        type: 'bar',
        data: dataGraph4,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Total de periféricos prestados vs por prestar en el municipio por institución'
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
        }
      };
  
      displayGraph4 = new Chart(graph4, configGraph4);
      sampleGraph4.innerHTML="Total Muestra: "+ sample4; 
      displayGraph4.canvas.parentNode.style.height = '300px';
      displayGraph4.canvas.parentNode.style.width = '700px';
}

function municipalityGraph5(info, municipality) {
  let showData = [0, 0];


  for (let index = 2; index < 36; index++) {

      const element = info.data[index];
      if(element[0]==municipality){
        showData[0] += parseInt(element[62]);
      if(element[7]=='Alternancia' || element[7]=='Remoto'){
      showData[1] += parseInt(element[12]);
      }
      }
      
      

  }

  showData[1]=  showData[1]- showData[0];

  let sample5 = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

  const dataGraph5 = {
      labels: ['Estudiantes que han recibido Sim-card ', 
                'Estudiantes que no han recibido Sim-card'],
      datasets: [
        {
          label: 'Dataset 1',
          data: showData,
          backgroundColor: colors,
          hoverOffset: 4,
        }
      ]
    };
    
    const configGraph5 = {
        type: 'doughnut',
        data: dataGraph5,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Sim-cards en en el municipio'
            }
          }
        },
      };
  
      displayGraph5 = new Chart(graph5, configGraph5);
      sampleGraph5.innerHTML="Total Muestra: "+ sample5; 
      displayGraph5.canvas.parentNode.style.height = '250px';
      displayGraph5.canvas.parentNode.style.width = '350px';
}

function municipalityGraph6(info, municipality) {

  let filteredData = [];
  let labelNames = []
  let showData1 = [0];
  let showData2 = [0];

  for (let index = 0; index < info.data.length; index++) {
      const element = info.data[index];
      if (element[0] == municipality) {
          filteredData.push(element);
      }
  }


  for (let index = 0; index < filteredData.length; index++) {
      if (index == 0) {
          labelNames.push(filteredData[index][1]);
      } else if (filteredData[index][1] != labelNames[labelNames.length - 1]) {
          labelNames.push(filteredData[index][1]);
      }
  }

  for (let index = 0; index < filteredData.length; index++) {
      const element = filteredData[index];
      if (element[1] != labelNames[showData1.length - 1] && showData1.length < labelNames.length) {
        showData1.push(0);
        showData2.push(0);
      }
      if (element[1] == labelNames[showData1.length - 1]) {
        showData1[showData1.length - 1] += parseInt(element[62]);
        if(element[7]=='Alternancia' || element[7]=='Remoto'){
            showData2[showData1.length - 1]  += parseInt(element[12]);
        }
      }
  }

  for (let i = 0; i < showData2.length; i++) {
      showData2[i]= showData2[i]-showData1[i];
  }
  let sample6 = showData1.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);
  sample6+=showData2.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);




  const dataGraph6 = {
      labels: labelNames,
      datasets: [
        {
          label: 'Estudiantes que no han recibido sim-card',
          data: showData2,
          backgroundColor:'#033F62',
        },
        {
          label: 'Estudiantes que han recibido sim-card',
          data: showData1,
          backgroundColor: '#60B5BB',
        },
      ]
    };
    
    const configGraph6 = {
        type: 'bar',
        data: dataGraph6,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Sim-cards en en el municipio por institución'
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
        }
      };
  
      displayGraph6 = new Chart(graph6, configGraph6);
      sampleGraph6.innerHTML="Total Muestra: "+ sample6; 
      displayGraph6.canvas.parentNode.style.height = '300px';
      displayGraph6.canvas.parentNode.style.width = '700px';
}

function municipalityGraph7(info, municipality) {
  let showData = [0, 0];


  for (let index = 2; index < 36; index++) {

      const element = info.data[index];

      if (element[0] == municipality) {
        showData[0] += parseInt(element[61]);
        if(element[7]=='Alternancia' || element[7]=='Remoto'){
        showData[1] += parseInt(element[12]);
        }
      }
     
      

  }

  showData[1]=  showData[1]- showData[0];

  let sample7 = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

  const dataGraph7 = {
      labels: ['Requieren pago de envío de materiales', 
                 'No requieren pago de envío de materiales'],
      datasets: [
        {
          label: 'Dataset 1',
          data: showData,
          backgroundColor: colors,
          hoverOffset: 4,
        }
      ]
    };
    
    const configGraph7 = {
        type: 'doughnut',
        data: dataGraph7,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Estudiantes pago de envio de manteriales en el municipio'
            }
          }
        },
      };
  
      
  displayGraph7 = new Chart(graph7, configGraph7);
  sampleGraph7.innerHTML="Total Muestra: "+ sample7; 
  displayGraph7.canvas.parentNode.style.height = '250px';
  displayGraph7.canvas.parentNode.style.width = '350px';
}

function municipalityGraph8(info, municipality) {
  let filteredData = [];
  let labelNames = []
  let showData1 = [0];
  let showData2 = [0];

  for (let index = 0; index < info.data.length; index++) {
      const element = info.data[index];
      if (element[0] == municipality) {
          filteredData.push(element);
      }
  }


  for (let index = 0; index < filteredData.length; index++) {
      if (index == 0) {
          labelNames.push(filteredData[index][1]);
      } else if (filteredData[index][1] != labelNames[labelNames.length - 1]) {
          labelNames.push(filteredData[index][1]);
      }
  }

  for (let index = 0; index < filteredData.length; index++) {
      const element = filteredData[index];
      if (element[1] != labelNames[showData1.length - 1] && showData1.length < labelNames.length) {
        showData1.push(0);
        showData2.push(0);
      }
      if (element[1] == labelNames[showData1.length - 1]) {
        showData1[showData1.length - 1] += parseInt(element[61]);
        if(element[7]=='Alternancia' || element[7]=='Remoto'){
            showData2[showData1.length - 1]  += parseInt(element[12]);
        }
      }
  }

  for (let i = 0; i < showData2.length; i++) {
      showData2[i]= showData2[i]-showData1[i];
  }

  let sample8 = showData1.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);
  sample8+=showData2.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);


  const dataGraph8 = {
      labels: labelNames,
      datasets: [
        {
          label: 'Requieren pago',
          data: showData1,
          backgroundColor:'#033F62',
        },
        {
          label: 'No requieren pago',
          data: showData2,
          backgroundColor: '#60B5BB',
        },
      ]
    };
    
    const configGraph8 = {
        type: 'bar',
        data: dataGraph8,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Pago de envio de materiales en el municipio por institución'
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
        }
      };
  
  displayGraph8 = new Chart(graph8, configGraph8);
  sampleGraph8.innerHTML="Total Muestra: "+ sample8; 
  displayGraph8.canvas.parentNode.style.height = '300px';
  displayGraph8.canvas.parentNode.style.width = '700px'
}

institutionSelectGenMethods.addEventListener("change", function () {
  if (institutionSelectGenMethods.value == "INSTITUCIÓN") {
      destroyGraphs();
      createMunicipalityGraphs(municipalitySelectGenMethods.value);
      showGraphs();
  } else {
      destroyGraphs();
      createInstitutionGraphs(institutionSelectGenMethods.value);
  }
});

function createInstitutionGraphs(institution) {
  let rawData = "";

  $.ajax(dataBase).done(function (result) {
      rawData = result;
      let data = Papa.parse(rawData, configData);
      institutionGraph1(data, institution);
      institutionGraph2(data, institution);
      institutionGraph3(data, institution);
      institutionGraph4(data, institution);
      institutionGraph5(data, institution);
      institutionGraph6(data,institution);
      institutionGraph7(data,institution);
      institutionGraph8(data,institution);
  });
}

function institutionGraph1(info, institution){

  let showData = [0, 0, 0, 0, 0, 0, 0];

  for (let index = 2; index < 36; index++) {
      const element = info.data[index];
    if(element[1]==institution){
      showData[0] += parseInt(element[48]);
      showData[1] += parseInt(element[49]);
      showData[2] += parseInt(element[50]);
      showData[3] += parseInt(element[51]);
      showData[4] += parseInt(element[52]);
      showData[5] += parseInt(element[53]);
      showData[6] += parseInt(element[54]);
    }
      

  }
  let sample = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);


  const dataGraph1 = {
      labels: ['Más de 6 estudiantes', '6 estudiantes', '5 estudiantes', '4 estudiantes',
          '3 estudiantes', '2 estudiantes', '1 estudiante'
      ],
      datasets: [{
          label: 'Dataset 1',
          data: showData,
          backgroundColor: colors,
      }, ]
  };

  const configGraph1 = {
      type: 'bar',
      data: dataGraph1,
      options: {
          indexAxis: 'y',
          elements: {
              bar: {
                  borderWidth: 2,
              }
          },
          responsive: true,
          plugins: {
              legend: {
                  position: 'right',
                  display: false,
              },
              title: {
                  display: true,
                  text: 'Número de hogares sin servicio de internet por número de estudiantes'
              }
          }
      },
  };

  displayGraph1 = new Chart(graph1, configGraph1);
  sampleGraph1.innerHTML = "Total Muestra: " + sample;
  displayGraph1.canvas.parentNode.style.height = '300px';
  displayGraph1.canvas.parentNode.style.width = '700px';
}

function institutionGraph2(info, institution){
  let filteredData = [];
  let labelNames = []
  let showData = [0];

    for (let index = 0; index < info.data.length; index++) {
        const element = info.data[index];
        if (element[1] == institution) {
            filteredData.push(element);
        }
    }

    for (let index = 0; index < filteredData.length; index++) {
        if (index == 0) {
            labelNames.push(filteredData[index][3]);
        } else if (filteredData[index][3] != labelNames[labelNames.length - 1]) {
            labelNames.push(filteredData[index][3]);
        }
    }

    for (let index = 0; index < filteredData.length; index++) {
        const element = filteredData[index];
        if (element[3] != labelNames[showData.length - 1] && showData.length < labelNames.length) {
            showData.push(0);
        }
        if (element[3] == labelNames[showData.length - 1]) {
            showData[showData.length - 1] += parseInt(element[47]);
        }
    }

  let sample2 = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

    const dataGraph2 = {
        labels: labelNames,
        datasets: [{
            label: 'Dataset 1',
            data: showData,
            borderColor: colors,
            backgroundColor: colors,
        }, ]
    };

    const configGraph2 = {
        type: 'bar',
        data: dataGraph2,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Número de hogares sin servicios de internet por sede'
                }
            }
        },
    };

    displayGraph2 = new Chart(graph2, configGraph2);
    sampleGraph2.innerHTML = "Total Muestra: " + sample2;
    displayGraph2.canvas.parentNode.style.height = '300px';
    displayGraph2.canvas.parentNode.style.width = '700px';
}

function institutionGraph3(info, institution){
  let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {
      const element = info.data[index];
      if(element[1]==institution){
        showData[0] += parseInt(element[57]);
        showData[1] += parseInt(element[58]);
        showData[2] += parseInt(element[59]);
        showData[3] += parseInt(element[60]);
      }
       

    }

    let sample3 = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const dataGraph3 = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const configGraph3 = {
        type: 'bar',
        data: dataGraph3,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              display: false,
            },
            title: {
              display: true,
              text: 'Número de periféricos prestados en la institución por nivel'
            }
          }
        },
      };
  
      displayGraph3 = new Chart(graph3, configGraph3);
      sampleGraph3.innerHTML="Total Muestra: "+ sample3; 
      displayGraph3.canvas.parentNode.style.height = '300px';
      displayGraph3.canvas.parentNode.style.width = '700px';
}

function institutionGraph4(info, institution){
  let filteredData = [];
  let labelNames = []
  let showData1 = [0];
  let showData2 = [0];


  for (let index = 0; index < info.data.length; index++) {
    const element = info.data[index];
    if (element[1] == institution) {
        filteredData.push(element);
    }
}


for (let index = 0; index < filteredData.length; index++) {
    if (index == 0) {
        labelNames.push(filteredData[index][3]);
    } else if (filteredData[index][3] != labelNames[labelNames.length - 1]) {
        labelNames.push(filteredData[index][3]);
    }
}

for (let index = 0; index < filteredData.length; index++) {
    const element = filteredData[index];
    if (element[3] != labelNames[showData1.length - 1] && showData1.length < labelNames.length) {
        showData1.push(0);
        showData2.push(0);
    }
    if (element[3] == labelNames[showData1.length - 1]) {
      showData1[showData1.length - 1] += parseInt(element[56]);
      showData2[showData2.length - 1] += parseInt(element[55]);
    }
}

  for (let i = 0; i < showData2.length; i++) {
      showData2[i]= showData2[i]-showData1[i];
  }
  let sample4 = showData1.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);
  sample4+=showData2.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

  const dataGraph4 = {
      labels: labelNames,
      datasets: [
        {
          label: 'Prestados',
          data: showData1,
          backgroundColor:'#033F62',
        },
        {
          label: 'Por prestar',
          data: showData2,
          backgroundColor: '#60B5BB',
        },
      ]
    };
    
    const configGraph4 = {
        type: 'bar',
        data: dataGraph4,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Total de periféricos prestados vs por prestar en la institución por sede'
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
        }
      };
  
      displayGraph4 = new Chart(graph4, configGraph4);
      sampleGraph4.innerHTML="Total Muestra: "+ sample4; 
      displayGraph4.canvas.parentNode.style.height = '300px';
      displayGraph4.canvas.parentNode.style.width = '700px';
}

function institutionGraph5(info, institution) {
  let showData = [0, 0];


  for (let index = 2; index < 36; index++) {

      const element = info.data[index];
      if(element[1]==institution){
      showData[0] += parseInt(element[62]);
      if(element[7]=='Alternancia' || element[7]=='Remoto'){
      showData[1] += parseInt(element[12]);
      }
    }
      

  }

  showData[1]=  showData[1]- showData[0];

  let sample5 = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

  const dataGraph5 = {
      labels: ['Estudiantes que han recibido Sim-card ', 
                'Estudiantes que no han recibido Sim-card'],
      datasets: [
        {
          label: 'Dataset 1',
          data: showData,
          backgroundColor: colors,
          hoverOffset: 4,
        }
      ]
    };
    
    const configGraph5 = {
        type: 'doughnut',
        data: dataGraph5,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Sim-cards en en la institución'
            }
          }
        },
      };
  
      displayGraph5 = new Chart(graph5, configGraph5);
      sampleGraph5.innerHTML="Total Muestra: "+ sample5; 
      displayGraph5.canvas.parentNode.style.height = '250px';
      displayGraph5.canvas.parentNode.style.width = '350px';
}

function institutionGraph6(info, institution) {
  let filteredData = [];
  let labelNames = []
  let showData1 = [0];
  let showData2 = [0];


  for (let index = 0; index < info.data.length; index++) {
    const element = info.data[index];
    if (element[1] == institution) {
        filteredData.push(element);
    }
}


for (let index = 0; index < filteredData.length; index++) {
    if (index == 0) {
        labelNames.push(filteredData[index][3]);
    } else if (filteredData[index][3] != labelNames[labelNames.length - 1]) {
        labelNames.push(filteredData[index][3]);
    }
}

for (let index = 0; index < filteredData.length; index++) {
    const element = filteredData[index];
    if (element[3] != labelNames[showData1.length - 1] && showData1.length < labelNames.length) {
        showData1.push(0);
        showData2.push(0);
    }
    if (element[3] == labelNames[showData1.length - 1]) {
      showData1[showData1.length - 1] += parseInt(element[62]);
      if(element[7]=='Alternancia' || element[7]=='Remoto'){
          showData2[showData2.length - 1]  += parseInt(element[12]);
      }
    }
}

  for (let i = 0; i < showData2.length; i++) {
      showData2[i]= showData2[i]-showData1[i];
  }

  let sample6 = showData1.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);
  sample6+=showData2.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);


  const dataGraph6 = {
      labels: labelNames,
      datasets: [
        {
          label: 'Estudiantes que no han recibido sim-card',
          data: showData2,
          backgroundColor:'#033F62',
        },
        {
          label: 'Estudiantes que han recibido sim-card',
          data: showData1,
          backgroundColor: '#60B5BB',
        },
      ]
    };
    
    const configGraph6 = {
        type: 'bar',
        data: dataGraph6,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Sim-cards en en la institución por sede'
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
        }
      };
  
      displayGraph6 = new Chart(graph6, configGraph6);
      sampleGraph6.innerHTML="Total Muestra: "+ sample6; 
      displayGraph6.canvas.parentNode.style.height = '300px';
      displayGraph6.canvas.parentNode.style.width = '700px';
}

function institutionGraph7(info, institution) {
  let showData = [0, 0];


  for (let index = 2; index < 36; index++) {

      const element = info.data[index];
      if(element[1]==institution){
      showData[0] += parseInt(element[61]);
      if(element[7]=='Alternancia' || element[7]=='Remoto'){
      showData[1] += parseInt(element[12]);
      }
    }
      

  }

  showData[1]=  showData[1]- showData[0];

  let sample7 = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

  const dataGraph7 = {
      labels: ['Requieren pago de envío de materiales', 
                 'No requieren pago de envío de materiales'],
      datasets: [
        {
          label: 'Dataset 1',
          data: showData,
          backgroundColor: colors,
          hoverOffset: 4,
        }
      ]
    };
    
    const configGraph7 = {
        type: 'doughnut',
        data: dataGraph7,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Estudiantes pago de envio de manteriales en la institución'
            }
          }
        },
      };
  
      
  displayGraph7 = new Chart(graph7, configGraph7);
  sampleGraph7.innerHTML="Total Muestra: "+ sample7; 
  displayGraph7.canvas.parentNode.style.height = '250px';
  displayGraph7.canvas.parentNode.style.width = '350px';
}

function institutionGraph8(info, institution) {
  let filteredData = [];
  let labelNames = []
  let showData1 = [0];
  let showData2 = [0];


  for (let index = 0; index < info.data.length; index++) {
    const element = info.data[index];
    if (element[1] == institution) {
        filteredData.push(element);
    }
}


for (let index = 0; index < filteredData.length; index++) {
    if (index == 0) {
        labelNames.push(filteredData[index][3]);
    } else if (filteredData[index][3] != labelNames[labelNames.length - 1]) {
        labelNames.push(filteredData[index][3]);
    }
}

for (let index = 0; index < filteredData.length; index++) {
    const element = filteredData[index];
    if (element[3] != labelNames[showData1.length - 1] && showData1.length < labelNames.length) {
        showData1.push(0);
        showData2.push(0);
    }
    if (element[3] == labelNames[showData1.length - 1]) {
      showData1[showData1.length - 1] += parseInt(element[61]);
      if(element[7]=='Alternancia' || element[7]=='Remoto'){
          showData2[showData2.length - 1]  += parseInt(element[12]);
      }
    }
}

  for (let i = 0; i < showData2.length; i++) {
      showData2[i]= showData2[i]-showData1[i];
  }

  let sample8 = showData1.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);
  sample8+=showData2.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);


  const dataGraph8 = {
      labels: labelNames,
      datasets: [
        {
          label: 'Requieren pago',
          data: showData1,
          backgroundColor:'#033F62',
        },
        {
          label: 'No Requieren pago',
          data: showData2,
          backgroundColor: '#60B5BB',
        },
      ]
    };
    
    const configGraph8 = {
        type: 'bar',
        data: dataGraph8,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Pago de envio de materiales en la institución por sede'
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
        }
      };
  
  displayGraph8 = new Chart(graph8, configGraph8);
  sampleGraph8.innerHTML="Total Muestra: "+ sample8; 
  displayGraph8.canvas.parentNode.style.height = '300px';
  displayGraph8.canvas.parentNode.style.width = '700px'
}

campusSelectGenMethods.addEventListener("change", function () {
  if (campusSelectGenMethods.value == "SEDE") {
      destroyGraphs();
      createInstitutionGraphs(institutionSelectGenMethods.value);
      showGraphs();
  } else {
      destroyGraphs();
      hideGraphs();
      createCampusGraphs(campusSelectGenMethods.value);
  }
});

function createCampusGraphs(campus) {
  let rawData = "";

  $.ajax(dataBase).done(function (result) {
      rawData = result;
      let data = Papa.parse(rawData, configData);
      campusGraph1(data, campus);
      campusGraph2(data, campus);
      campusGraph3(data, campus);
      campusGraph4(data, campus);
      campusGraph5(data, campus);
  });
}

function campusGraph1(info, campus){

  let showData = [0, 0, 0, 0, 0, 0, 0];

  for (let index = 2; index < 36; index++) {
      const element = info.data[index];
    if(element[3]== campus){
      showData[0] += parseInt(element[48]);
      showData[1] += parseInt(element[49]);
      showData[2] += parseInt(element[50]);
      showData[3] += parseInt(element[51]);
      showData[4] += parseInt(element[52]);
      showData[5] += parseInt(element[53]);
      showData[6] += parseInt(element[54]);
    }
      

  }
  let sample = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);


  const dataGraph1 = {
      labels: ['Más de 6 estudiantes', '6 estudiantes', '5 estudiantes', '4 estudiantes',
          '3 estudiantes', '2 estudiantes', '1 estudiante'
      ],
      datasets: [{
          label: 'Dataset 1',
          data: showData,
          backgroundColor: colors,
      }, ]
  };

  const configGraph1 = {
      type: 'bar',
      data: dataGraph1,
      options: {
          indexAxis: 'y',
          elements: {
              bar: {
                  borderWidth: 2,
              }
          },
          responsive: true,
          plugins: {
              legend: {
                  position: 'right',
                  display: false,
              },
              title: {
                  display: true,
                  text: 'Número de hogares sin servicio de internet por número de estudiantes'
              }
          }
      },
  };

  displayGraph1 = new Chart(graph1, configGraph1);
  sampleGraph1.innerHTML = "Total Muestra: " + sample;
  displayGraph1.canvas.parentNode.style.height = '300px';
  displayGraph1.canvas.parentNode.style.width = '700px';
}

function campusGraph2(info, campus){
  let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {
      const element = info.data[index];
      if(element[3]==campus){
        
        showData[0] += parseInt(element[57]);
        showData[1] += parseInt(element[58]);
        showData[2] += parseInt(element[59]);
        showData[3] += parseInt(element[60]);
      }

    }

    let sample3 = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const dataGraph3 = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [
            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const configGraph3 = {
        type: 'bar',
        data: dataGraph3,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              display: false,
            },
            title: {
              display: true,
              text: 'Número de periféricos prestados en la sede por nivel'
            }
          }
        },
      };
  
      displayGraph3 = new Chart(graph3, configGraph3);
      sampleGraph3.innerHTML="Total Muestra: "+ sample3; 
      displayGraph3.canvas.parentNode.style.height = '300px';
      displayGraph3.canvas.parentNode.style.width = '700px';
} 

function campusGraph3(info, campus){
  let showData1 = [0];
  let showData2 = [0];

  for (let index = 0; index < info.data.length; index++) {

      const element = info.data[index];
      if (element[3] == campus) {

          showData1[0] += parseInt(element[56]);
          showData2[0] += parseInt(element[55]);

      }
  }

  for (let i = 0; i < showData2.length; i++) {
      showData2[i]= showData2[i]-showData1[i];
  }

  let sample4 = showData1.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);
  sample4+=showData2.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);


  const dataGraph4 = {
      labels: ['Cantidad'],
      datasets: [
        {
          label: 'Prestados',
          data: showData1,
          backgroundColor:'#033F62',
        },
        {
          label: 'Por prestar',
          data: showData2,
          backgroundColor: '#60B5BB',
        },
      ]
    };
    
    const configGraph4 = {
        type: 'bar',
        data: dataGraph4,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Total de periféricos prestados vs por prestar en la sede'
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          }
        }
      };
  
      displayGraph4 = new Chart(graph4, configGraph4);
      sampleGraph4.innerHTML="Total Muestra: "+ sample4; 
      displayGraph4.canvas.parentNode.style.height = '300px';
      displayGraph4.canvas.parentNode.style.width = '700px';
}

function campusGraph4(info, campus) {
  let showData = [0, 0];


  for (let index = 2; index < 36; index++) {

      const element = info.data[index];
      if(element[3]==campus){
      showData[0] += parseInt(element[62]);
      if(element[7]=='Alternancia' || element[7]=='Remoto'){
      showData[1] += parseInt(element[12]);
      }
    }
      

  }

  showData[1]=  showData[1]- showData[0];

  let sample5 = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

  const dataGraph5 = {
      labels: ['Estudiantes que han recibido Sim-card ', 
                'Estudiantes que no han recibido Sim-card'],
      datasets: [
        {
          label: 'Dataset 1',
          data: showData,
          backgroundColor: colors,
          hoverOffset: 4,
        }
      ]
    };
    
    const configGraph5 = {
        type: 'doughnut',
        data: dataGraph5,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Sim-cards en en la sede'
            }
          }
        },
      };
  
      displayGraph5 = new Chart(graph5, configGraph5);
      sampleGraph5.innerHTML="Total Muestra: "+ sample5; 
      displayGraph5.canvas.parentNode.style.height = '250px';
      displayGraph5.canvas.parentNode.style.width = '350px';
}

function campusGraph5(info, campus) {
  let showData = [0, 0];


  for (let index = 2; index < 36; index++) {

      const element = info.data[index];
      if(element[3]==campus){
      showData[0] += parseInt(element[61]);
      if(element[7]=='Alternancia' || element[7]=='Remoto'){
      showData[1] += parseInt(element[12]);
      }
    }
      

  }

  showData[1]=  showData[1]- showData[0];

  let sample7 = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

  const dataGraph7 = {
      labels: ['Requieren pago de envío de materiales', 
                 'No requieren pago de envío de materiales'],
      datasets: [
        {
          label: 'Dataset 1',
          data: showData,
          backgroundColor: colors,
          hoverOffset: 4,
        }
      ]
    };
    
    const configGraph7 = {
        type: 'doughnut',
        data: dataGraph7,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Estudiantes pago de envio de manteriales en la sede'
            }
          }
        },
      };
  
      
  displayGraph7 = new Chart(graph7, configGraph7);
  sampleGraph7.innerHTML="Total Muestra: "+ sample7; 
  displayGraph7.canvas.parentNode.style.height = '250px';
  displayGraph7.canvas.parentNode.style.width = '350px';
}

function hideGraphs(){
  document.getElementById("container_resourceGraph2").style.display= "none";
  document.getElementById("container_resourceGraph6").style.display= "none";
  document.getElementById("container_resourceGraph8").style.display= "none";
}
  
function showGraphs(){
  document.getElementById("container_resourceGraph2").style.display= "flex";
  document.getElementById("container_resourceGraph6").style.display= "flex";
  document.getElementById("container_resourceGraph8").style.display= "flex";
}

function destroyGraphs() {
  displayGraph1.destroy();
  displayGraph2.destroy();
  displayGraph3.destroy();
  displayGraph4.destroy();
  displayGraph5.destroy();
  displayGraph6.destroy();
  displayGraph7.destroy();
  displayGraph8.destroy();
}
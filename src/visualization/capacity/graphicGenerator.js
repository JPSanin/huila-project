//Selects for refreshing graphs
let municipalitySelectGenMethods = document.getElementById("municipalitySelect");
let institutionSelectGenMethods = document.getElementById("institutionSelect");
let campusSelectGenMethods = document.getElementById("campusSelect");


//Graph Canvases and Samples
let capacitygraph1 = document.getElementById("capacityEstudents");
let capacitysampleGraph1 = document.getElementById("capacityEstudentsSample");
let capacitydisplayGraph1;

let capacitygraph2 = document.getElementById("capacityEstudentsModality");
let capacitysampleGraph2 = document.getElementById("capacityEstudentsModalitySample");
let capacitydisplayGraph2;


let capacitygraph3 = document.getElementById("capacityEstudentsAlternation");
let capacitysampleGraph3 = document.getElementById("capacityEstudentsAlternationSample");
let capacitydisplayGraph3;

let capacitygraph4 = document.getElementById("capacityGroups");
let capacitysampleGraph4 = document.getElementById("capacityGroupsSample");
let capacitydisplayGraph4;

let capacitygraph5 = document.getElementById("capacityAttendance1");
let capacitysampleGraph5 = document.getElementById("capacityAttendance1Sample");
let capacitydisplayGraph5;

let capacitygraph6 = document.getElementById("capacityAttendance2");
let capacitysampleGraph6 = document.getElementById("capacityAttendence2Sample");
let capacitydisplayGraph6;


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

    });
}

function initialStateGraph1(info) {
    let showData = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {

            showData[0] += parseInt(element[12]);

        }
        if (element[0] == "BARAYA") {

            showData[1] += parseInt(element[12]);

        }
        if (element[0] == "ISNOS") {

            showData[2] += parseInt(element[12]);

        }
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);




    const data = {
        labels: ["Agrado", "Baraya", "Isnos"],
        datasets: [{
            label: 'Dataset 1',
            data: showData,
            borderColor: colors,
            backgroundColor: colors,
        }, ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes matriculados por municipio'
                }
            }
        },
    };

    capacitydisplayGraph1 = new Chart(capacitygraph1, config);
    capacitysampleGraph1.innerHTML = "Total Muestra: " + sample;
    capacitydisplayGraph1.canvas.parentNode.style.height = '300px';
    capacitydisplayGraph1.canvas.parentNode.style.width = '700px';
}

function initialStateGraph2(info) {
    let showData = [0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];
        showData[0] += parseInt(element[12]);
        showData[1] += parseInt(element[15]);

        
       
    }
    showData[0]=showData[0]-showData[1]; 
    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ['Remoto', 'Alternancia/Presencialidad'],
        datasets: [
          {
            label: 'Dataset',
            data: showData,
            backgroundColor: colors,
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
                display: false,
              },
              title: {
                display: true,
                text: 'Estudiantes matriculados de acuerdo a la modalidad'
              }
            }
          },
        };

    capacitydisplayGraph2 = new Chart(capacitygraph2, config);
    capacitysampleGraph2.innerHTML = "Total Muestra: " + sample;
    capacitydisplayGraph2.canvas.parentNode.style.height = '300px';
    capacitydisplayGraph2.canvas.parentNode.style.width = '700px';
}

function initialStateGraph3(info) {
    let showData = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {
            
                showData[0] += parseInt(element[15]);
             
        }
        if (element[0] == "BARAYA") {
            
                showData[1] += parseInt(element[15]);
            
        }
        if (element[0] == "ISNOS") {

            
                showData[2] += parseInt(element[15]);
            

        }
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data= {
        labels: ['Agrado', 'Baraya', 'Isnos'],
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
              position: 'right',
            },
            title: {
              display: true,
              text: 'Estudiantes matriculados en presencialidad/alternancia por municipio'
            }
          }
        },
      };
    
      capacitydisplayGraph3 = new Chart(capacitygraph3, config);
      capacitysampleGraph3.innerHTML = "Total Muestra: " + sample;
      capacitydisplayGraph3.canvas.parentNode.style.height = '250px';
      capacitydisplayGraph3.canvas.parentNode.style.width = '350px';

   
}

function initialStateGraph4(info) {
    let showData = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {

            showData[0] += parseInt(element[13]);

        }
        if (element[0] == "BARAYA") {

            showData[1] += parseInt(element[13]);

        }
        if (element[0] == "ISNOS") {

            showData[2] += parseInt(element[13]);

        }
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);



    const data = {
        labels: ['Agrado', 'Baraya', 'Isnos'],
        datasets: [
          {
            label: 'Dataset',
            data: showData,
            backgroundColor: colors,
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
                display: false,
              },
              title: {
                display: true,
                text: 'Número de grupos en alternancia/presencialidad por municipios'
              }
            }
          },
        };

    capacitydisplayGraph4 = new Chart(capacitygraph4, config);
    capacitysampleGraph4.innerHTML = "Total Muestra: " + sample;
    capacitydisplayGraph4.canvas.parentNode.style.height = '300px';
    capacitydisplayGraph4.canvas.parentNode.style.width = '700px';
}

function initialStateGraph5(info) {

    let showData = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {

            showData[0] += parseInt(element[14]);

        }
        if (element[0] == "BARAYA") {

            showData[1] += parseInt(element[14]);

        }
        if (element[0] == "ISNOS") {

            showData[2] += parseInt(element[14]);

        }
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);


    const data= {
        labels: ['Isnos', 'Baraya', 'Agrado'],
        datasets: [
          {
            label: 'Dataset',
            data: [654, 684, 1750],
            backgroundColor: colors,
          },
        ]
      };
      
      const config = {
        type: 'bar',
        data: data,
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
              text: 'Cantidad de personas asistiendo en modalidad completa o alternancia de acuerdo al municipio'
            }
          }
        },
      };
      
        

    capacitydisplayGraph5 = new Chart(capacitygraph5, config);
    capacitysampleGraph5.innerHTML = "Total Muestra: " + sample;
    capacitydisplayGraph5.canvas.parentNode.style.height = '300px';
    capacitydisplayGraph5.canvas.parentNode.style.width = '700px';
}

function initialStateGraph6(info) {

    let showData = [0, 0, 0, 0, 0];

    for (let index = 2; index <36; index++) {

        const element = info.data[index];
    
            showData[0] += parseInt(element[19]);
            showData[1] += parseInt(element[18]);
            showData[2] += parseInt(element[17]);
            showData[3] += parseInt(element[16]);
            showData[4] += parseInt(element[15]);


        
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);



    const data= {
        labels: ['Personal administrativo de aseo', 'Personal administrativo', 'Docentes',
                'Directivos', 'Estudiantes'],
        datasets: [
          {
            label: 'Dataset',
            data: showData,
            backgroundColor: [
                '#83B8D7',
                '#008892',
                '#003F63', 
                '#FF6766',
                '#FDC967', 
                '#C5C789', 
              ],
          },
        ]
      };
      
      const config = {
        type: 'bar',
        data: data,
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
              text: 'Cantidad de personas asistiendo en modalidad completa o alternancia de acuerdo al perfil'
            }
          }
        },
      };
      
    capacitydisplayGraph6 = new Chart(capacitygraph6, config);
    capacitysampleGraph6.innerHTML = "Total Muestra: " + sample;
    capacitydisplayGraph6.canvas.parentNode.style.height = '300px';
    capacitydisplayGraph6.canvas.parentNode.style.width = '700px';
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
       municipalityGraph6(data,municipality);
  });
}

function municipalityGraph1(info, municipality) {
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
          
          showData[showData.length - 1] += parseInt(element[12]);
          
      }


  }



  let sample = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

  //**** */
  const data = {
      labels: labelNames,
      datasets: [

          {
              label: 'Estudiantes',
              data: showData,
              backgroundColor: colors,
          }
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
                  display: false,
              },
              title: {
                  display: true,
                  text: 'Estudiantes matriculados en el municipio por instituciones educativas'
              }
          }
      },
  };
  capacitydisplayGraph1 = new Chart(capacitygraph1, config);
  capacitysampleGraph1.innerHTML = "Total Muestra: " + sample;
  capacitydisplayGraph1.canvas.parentNode.style.height = '350px';
  capacitydisplayGraph1.canvas.parentNode.style.width = '700px';
}

function municipalityGraph2(info, municipality) {

  let showData = [0, 0];

  for (let index = 2; index < 36; index++) {

      const element = info.data[index];
      if(element[0]==municipality){
        showData[0] += parseInt(element[12]);
        showData[1] += parseInt(element[15]);
      }
  }

  showData[0]=showData[0]-showData[1]; 
  let sample = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

  const data = {
    labels: ['Remoto', 'Alternancia/Presencialidad'],
    datasets: [
      {
        label: 'Dataset',
        data: showData,
        backgroundColor: colors,
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
            display: false,
          },
          title: {
            display: true,
            text: 'Estudiantes matriculados de acuerdo a la modalidad en el municipio'
          }
        }
      },
    };

capacitydisplayGraph2 = new Chart(capacitygraph2, config);
capacitysampleGraph2.innerHTML = "Total Muestra: " + sample;
capacitydisplayGraph2.canvas.parentNode.style.height = '300px';
capacitydisplayGraph2.canvas.parentNode.style.width = '700px';
}

function municipalityGraph3(info, municipality) {
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
          showData[showData.length - 1] += parseInt(element[15]);
          
      }
  }




  let sample = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

  const data= {
    labels: labelNames,
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
          position: 'right',
        },
        title: {
          display: true,
          text: 'Estudiantes matriculados en presencialidad/alternancia por municipio'
        }
      }
    },
  };

  capacitydisplayGraph3 = new Chart(capacitygraph3, config);
  capacitysampleGraph3.innerHTML = "Total Muestra: " + sample;
  capacitydisplayGraph3.canvas.parentNode.style.height = '250px';
  capacitydisplayGraph3.canvas.parentNode.style.width = '350px';


}

function municipalityGraph4(info, municipality) {
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
          
          showData[showData.length - 1] += parseInt(element[13]);
          
      }


  }



  let sample = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);



  const data = {
    labels: labelNames,
    datasets: [
      {
        label: 'Dataset',
        data: showData,
        backgroundColor: colors,
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
            display: false,
          },
          title: {
            display: true,
            text: 'Número de grupos en alternancia/presencialidad en el municipio por sedes'
          }
        }
      },
    };

capacitydisplayGraph4 = new Chart(capacitygraph4, config);
capacitysampleGraph4.innerHTML = "Total Muestra: " + sample;
capacitydisplayGraph4.canvas.parentNode.style.height = '300px';
capacitydisplayGraph4.canvas.parentNode.style.width = '700px';
}

function municipalityGraph5(info, municipality) {
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
          
          showData[showData.length - 1] += parseInt(element[14]);
          
      }


  }



  let sample = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

  const data= {
      labels: labelNames,
      datasets: [
        {
          label: 'Dataset',
          data: showData,
          backgroundColor: colors,
        },
      ]
    };
    
    const config = {
      type: 'bar',
      data: data,
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
            text: 'Cantidad de personas asistiendo en modalidad completa o alternancia en el municipio por instituciones educativas'
          }
        }
      },
    };
    
      

  capacitydisplayGraph5 = new Chart(capacitygraph5, config);
  capacitysampleGraph5.innerHTML = "Total Muestra: " + sample;
  capacitydisplayGraph5.canvas.parentNode.style.height = '300px';
  capacitydisplayGraph5.canvas.parentNode.style.width = '700px';
}

function municipalityGraph6(info, municipality) {
  let showData = [0, 0, 0, 0, 0];

  for (let index = 2; index <36; index++) {
      const element = info.data[index];
      if(element[0]==municipality){
        showData[0] += parseInt(element[19]);
        showData[1] += parseInt(element[18]);
        showData[2] += parseInt(element[17]);
        showData[3] += parseInt(element[16]);
        showData[4] += parseInt(element[15]);
      } 
  }

  let sample = showData.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
  }, 0);

  const data= {
    labels: ['Personal administrativo de aseo', 'Personal administrativo', 'Docentes',
            'Directivos', 'Estudiantes'],
    datasets: [
      {
        label: 'Dataset',
        data: showData,
        backgroundColor: [
            '#83B8D7',
            '#008892',
            '#003F63', 
            '#FF6766',
            '#FDC967', 
            '#C5C789', 
          ],
      },
    ]
  };
  
  const config = {
    type: 'bar',
    data: data,
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
          text: 'Cantidad de personas asistiendo en modalidad completa o alternancia de acuerdo al perfil dentro del municipio'
        }
      }
    },
  };
  
capacitydisplayGraph6 = new Chart(capacitygraph6, config);
capacitysampleGraph6.innerHTML = "Total Muestra: " + sample;
capacitydisplayGraph6.canvas.parentNode.style.height = '300px';
capacitydisplayGraph6.canvas.parentNode.style.width = '700px';
}


function destroyGraphs() {
  capacitydisplayGraph1.destroy();
  capacitydisplayGraph2.destroy();
  capacitydisplayGraph3.destroy();
  capacitydisplayGraph4.destroy();
  capacitydisplayGraph5.destroy();
  capacitydisplayGraph6.destroy();
}
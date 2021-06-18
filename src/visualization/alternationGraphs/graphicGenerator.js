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

let alternationgraph7 = document.getElementById("grupoSecDepartment");
let alternationsampleGraph7 = document.getElementById("grupoSecDepartmentSample");
let alternationdisplayGraph7;

let alternationgraph8 = document.getElementById("grupoMedDepartment");
let alternationsampleGraph8 = document.getElementById("grupoMedDepartmentSample");
let alternationdisplayGraph8;

let alternationgraph9 = document.getElementById("docentesDepartment");
let alternationsampleGraph9 = document.getElementById("docentesDepartmentSample");
let alternationdisplayGraph9;


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
        initialStateGraph9(data);

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
        data: showData,
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
  

    alternationdisplayGraph1 = new Chart(alternationgraph1, config);
    alternationsampleGraph1.innerHTML = "Total Muestra: " + sample;
    alternationdisplayGraph1.canvas.parentNode.style.height = '300px';
    alternationdisplayGraph1.canvas.parentNode.style.width = '700px';
}

function initialStateGraph2(info){

  //Falta traer la info

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

const data = {
  labels: ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'],
  datasets: [
    {
      label: 'Agrado',
      data: [145, 108, 79, 79, 78],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [57, 40, 40 ,134, 118],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [97, 117, 110, 32, 41],
      backgroundColor: '#FF6766',
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
          text: 'Número de estudiantes de primaria en alternancia por departamento'
        }
      }
    },
  };

let alternationdisplayGraph2 = new Chart(alternationgraph2, config);
alternationsampleGraph2.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph2.canvas.parentNode.style.height = '300px';
alternationdisplayGraph2.canvas.parentNode.style.width = '700px';

}

function initialStateGraph3(info){

  //Falta traer la info

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

const data = {
  labels: ['Sexto', 'Septimo', 'Octavo', 'Noveno'],
  datasets: [
    {
      label: 'Agrado',
      data: [147, 164, 154, 142],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [40, 0, 0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [44, 65, 0, 0],
      backgroundColor: '#FF6766',
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
          text: 'Número de estudiantes de secundaria en alternancia por departamento'
        }
      }
    },
  };

alternationdisplayGraph3 = new Chart(alternationgraph3, config);
alternationsampleGraph3.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph3.canvas.parentNode.style.height = '300px';
alternationdisplayGraph3.canvas.parentNode.style.width = '700px';

}

function initialStateGraph4(info){
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

const data = {
  labels: ['Decimo', 'Once'],
  datasets: [
    {
      label: 'Agrado',
      data: [146, 132],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [8, 8],
      backgroundColor: '#FF6766',
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
          text: 'Número de estudiantes de media en alternancia por departamento'
        }
      }
    },
  };

alternationdisplayGraph4 = new Chart(alternationgraph4, config);
alternationsampleGraph4.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph4.canvas.parentNode.style.height = '300px';
alternationdisplayGraph4.canvas.parentNode.style.width = '700px';
}

function initialStateGraph5(info){
  //Falta traer la info

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

const data = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Preescolar',
      data: [8, 7, 1],
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
          text: 'Número de grupos de preescolar en alternancia por departamento'
        }
      }
    },
  };

alternationdisplayGraph5 = new Chart(alternationgraph5, config);
alternationsampleGraph5.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph5.canvas.parentNode.style.height = '300px';
alternationdisplayGraph5.canvas.parentNode.style.width = '700px';
}

function initialStateGraph6(info) {

  //Falta traer la info

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

  const data = {
    labels: ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'],
    datasets: [
      {
        label: 'Agrado',
        data: [145, 108, 79, 79, 78],
        backgroundColor: '#003F63',
      },
      {
        label: 'Baraya',
        data: [57, 40, 40, 134, 118],
        backgroundColor: '#008892',
      },
      {
        label: 'Isnos',
        data: [97, 117, 110, 32, 41],
        backgroundColor: '#FF6766',
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
            text: 'Número de grupos de primaria en alternancia por departamento'
          }
        }
      },
    };
  
  alternationdisplayGraph6 = new Chart(alternationgraph6, config);
  alternationsampleGraph6.innerHTML = "Total Muestra: " + sample;
  alternationdisplayGraph6.canvas.parentNode.style.height = '300px';
  alternationdisplayGraph6.canvas.parentNode.style.width = '700px';
}

function initialStateGraph7(info){

  //Falta traer la info

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

const data = {
  labels: ['Sexto', 'Septimo', 'Octavo', 'Noveno'],
  datasets: [
    {
      label: 'Agrado',
      data: [7, 8, 8, 8],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [3, 0, 0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [3, 5, 0, 0],
      backgroundColor: '#FF6766',
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
          text: 'Número de grupos de secundaria en alternancia por departamento'
        }
      }
    },
  };

alternationdisplayGraph7 = new Chart(alternationgraph7, config);
alternationsampleGraph7.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph7.canvas.parentNode.style.height = '300px';
alternationdisplayGraph7.canvas.parentNode.style.width = '700px';

}

function initialStateGraph8(info){

  //Falta traer la info

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

const data = {
  labels: ['Decimo', 'Once',],
  datasets: [
    {
      label: 'Agrado',
      data: [7, 6],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [1, 1],
      backgroundColor: '#FF6766',
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
          text: 'Número de grupos de media en alternancia por departamento'
        }
      }
    },
  };

alternationdisplayGraph8 = new Chart(alternationgraph8, config);
alternationsampleGraph8.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph8.canvas.parentNode.style.height = '300px';
alternationdisplayGraph8.canvas.parentNode.style.width = '700px';

}

function initialStateGraph9(info){

    //Falta traer la info

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


const data = {
  labels: ['Preescolar', 'Primaria', 'Secundaria y Media'],
  datasets: [
    {
      label: 'Agrado',
      data: [23, 67, 56],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [7, 44, 12],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [1, 60, 28],
      backgroundColor: '#FF6766',
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
          text: 'Número de docentes en alternancia por nivel escolar por departamento'
        }
      }
    },
  };

alternationdisplayGraph9 = new Chart(alternationgraph9, config);
alternationsampleGraph9.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph9.canvas.parentNode.style.height = '300px';
alternationdisplayGraph9.canvas.parentNode.style.width = '700px';
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
      municipalityGraph7(data,municipality);
      municipalityGraph8(data,municipality);
      municipalityGraph9(data,municipality);
  });

}

function municipalityGraph1(info, municipality) {
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
      data: showData,
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
          text: 'Número de estudiantes de preescolar en alternancia por municipio'
        }
      }
    },
  };


  alternationdisplayGraph1 = new Chart(alternationgraph1, config);
  alternationsampleGraph1.innerHTML = "Total Muestra: " + sample;
  alternationdisplayGraph1.canvas.parentNode.style.height = '300px';
  alternationdisplayGraph1.canvas.parentNode.style.width = '700px';
}

function municipalityGraph2(info, municipality){

  //Falta traer la info

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

const data = {
  labels: ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'],
  datasets: [
    {
      label: 'Agrado',
      data: [145, 108, 79, 79, 78],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [57, 40, 40 ,134, 118],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [97, 117, 110, 32, 41],
      backgroundColor: '#FF6766',
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
          text: 'Número de estudiantes de primaria en alternancia por municipio'
        }
      }
    },
  };

alternationdisplayGraph2 = new Chart(alternationgraph2, config);
alternationsampleGraph2.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph2.canvas.parentNode.style.height = '300px';
alternationdisplayGraph2.canvas.parentNode.style.width = '700px';

}

function municipalityGraph3(info, municipality){

  //Falta traer la info

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

const data = {
  labels: ['Sexto', 'Septimo', 'Octavo', 'Noveno'],
  datasets: [
    {
      label: 'Agrado',
      data: [147, 164, 154, 142],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [40, 0, 0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [44, 65, 0, 0],
      backgroundColor: '#FF6766',
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
          text: 'Número de estudiantes de secundaria en alternancia por municipio'
        }
      }
    },
  };

alternationdisplayGraph3 = new Chart(alternationgraph3, config);
alternationsampleGraph3.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph3.canvas.parentNode.style.height = '300px';
alternationdisplayGraph3.canvas.parentNode.style.width = '700px';

}

function municipalityGraph4(info, municipality){
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

const data = {
  labels: ['Decimo', 'Once'],
  datasets: [
    {
      label: 'Agrado',
      data: [146, 132],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [8, 8],
      backgroundColor: '#FF6766',
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
          text: 'Número de estudiantes de media en alternancia por municipio'
        }
      }
    },
  };

alternationdisplayGraph4 = new Chart(alternationgraph4, config);
alternationsampleGraph4.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph4.canvas.parentNode.style.height = '300px';
alternationdisplayGraph4.canvas.parentNode.style.width = '700px';
}

function municipalityGraph5(info, municipality){
  //Falta traer la info

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

const data = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Preescolar',
      data: [8, 7, 1],
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
          text: 'Número de grupos de preescolar en alternancia por municipio'
        }
      }
    },
  };

alternationdisplayGraph5 = new Chart(alternationgraph5, config);
alternationsampleGraph5.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph5.canvas.parentNode.style.height = '300px';
alternationdisplayGraph5.canvas.parentNode.style.width = '700px';
}

function municipalityGraph6(info, municipality) {

  //Falta traer la info

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

  const data = {
    labels: ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'],
    datasets: [
      {
        label: 'Agrado',
        data: [145, 108, 79, 79, 78],
        backgroundColor: '#003F63',
      },
      {
        label: 'Baraya',
        data: [57, 40, 40, 134, 118],
        backgroundColor: '#008892',
      },
      {
        label: 'Isnos',
        data: [97, 117, 110, 32, 41],
        backgroundColor: '#FF6766',
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
            text: 'Número de grupos de primaria en alternancia por municipio'
          }
        }
      },
    };
  
  alternationdisplayGraph6 = new Chart(alternationgraph6, config);
  alternationsampleGraph6.innerHTML = "Total Muestra: " + sample;
  alternationdisplayGraph6.canvas.parentNode.style.height = '300px';
  alternationdisplayGraph6.canvas.parentNode.style.width = '700px';
}

function municipalityGraph7(info, municipality){

  //Falta traer la info

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

const data = {
  labels: ['Sexto', 'Septimo', 'Octavo', 'Noveno'],
  datasets: [
    {
      label: 'Agrado',
      data: [7, 8, 8, 8],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [3, 0, 0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [3, 5, 0, 0],
      backgroundColor: '#FF6766',
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
          text: 'Número de grupos de secundaria en alternancia por municipio'
        }
      }
    },
  };

alternationdisplayGraph7 = new Chart(alternationgraph7, config);
alternationsampleGraph7.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph7.canvas.parentNode.style.height = '300px';
alternationdisplayGraph7.canvas.parentNode.style.width = '700px';

}

function municipalityGraph8(info, municipality){

  //Falta traer la info

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

const data = {
  labels: ['Decimo', 'Once',],
  datasets: [
    {
      label: 'Agrado',
      data: [7, 6],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [1, 1],
      backgroundColor: '#FF6766',
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
          text: 'Número de grupos de media en alternancia por municipio'
        }
      }
    },
  };

alternationdisplayGraph8 = new Chart(alternationgraph8, config);
alternationsampleGraph8.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph8.canvas.parentNode.style.height = '300px';
alternationdisplayGraph8.canvas.parentNode.style.width = '700px';

}

function municipalityGraph9(info, municipality){

  //Falta traer la info

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


const data = {
labels: ['Preescolar', 'Primaria', 'Secundaria y Media'],
datasets: [
  {
    label: 'Agrado',
    data: [23, 67, 56],
    backgroundColor: '#003F63',
  },
  {
    label: 'Baraya',
    data: [7, 44, 12],
    backgroundColor: '#008892',
  },
  {
    label: 'Isnos',
    data: [1, 60, 28],
    backgroundColor: '#FF6766',
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
        text: 'Número de docentes en alternancia por nivel escolar por municipio'
      }
    }
  },
};

alternationdisplayGraph9 = new Chart(alternationgraph9, config);
alternationsampleGraph9.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph9.canvas.parentNode.style.height = '300px';
alternationdisplayGraph9.canvas.parentNode.style.width = '700px';
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
      institutionGraph9(data,institution);
  });

}

function institutionGraph1(info, institution) {
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
      data: showData,
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
          text: 'Número de estudiantes de preescolar en alternancia por institución'
        }
      }
    },
  };


  alternationdisplayGraph1 = new Chart(alternationgraph1, config);
  alternationsampleGraph1.innerHTML = "Total Muestra: " + sample;
  alternationdisplayGraph1.canvas.parentNode.style.height = '300px';
  alternationdisplayGraph1.canvas.parentNode.style.width = '700px';
}

function institutionGraph2(info, institution){

  //Falta traer la info

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

const data = {
  labels: ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'],
  datasets: [
    {
      label: 'Agrado',
      data: [145, 108, 79, 79, 78],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [57, 40, 40 ,134, 118],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [97, 117, 110, 32, 41],
      backgroundColor: '#FF6766',
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
          text: 'Número de estudiantes de primaria en alternancia por institución'
        }
      }
    },
  };

let alternationdisplayGraph2 = new Chart(alternationgraph2, config);
alternationsampleGraph2.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph2.canvas.parentNode.style.height = '300px';
alternationdisplayGraph2.canvas.parentNode.style.width = '700px';

}

function institutionGraph3(info, institution){

  //Falta traer la info

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

const data = {
  labels: ['Sexto', 'Septimo', 'Octavo', 'Noveno'],
  datasets: [
    {
      label: 'Agrado',
      data: [147, 164, 154, 142],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [40, 0, 0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [44, 65, 0, 0],
      backgroundColor: '#FF6766',
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
          text: 'Número de estudiantes de secundaria en alternancia por institución'
        }
      }
    },
  };

alternationdisplayGraph3 = new Chart(alternationgraph3, config);
alternationsampleGraph3.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph3.canvas.parentNode.style.height = '300px';
alternationdisplayGraph3.canvas.parentNode.style.width = '700px';

}

function institutionGraph4(info, institution){
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

const data = {
  labels: ['Decimo', 'Once'],
  datasets: [
    {
      label: 'Agrado',
      data: [146, 132],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [8, 8],
      backgroundColor: '#FF6766',
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
          text: 'Número de estudiantes de media en alternancia por institución'
        }
      }
    },
  };

alternationdisplayGraph4 = new Chart(alternationgraph4, config);
alternationsampleGraph4.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph4.canvas.parentNode.style.height = '300px';
alternationdisplayGraph4.canvas.parentNode.style.width = '700px';
}

function institutionGraph5(info, institution){
  //Falta traer la info

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

const data = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Preescolar',
      data: [8, 7, 1],
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
          text: 'Número de grupos de preescolar en alternancia por institución'
        }
      }
    },
  };

alternationdisplayGraph5 = new Chart(alternationgraph5, config);
alternationsampleGraph5.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph5.canvas.parentNode.style.height = '300px';
alternationdisplayGraph5.canvas.parentNode.style.width = '700px';
}

function institutionGraph6(info, institution) {

  //Falta traer la info

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

  const data = {
    labels: ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'],
    datasets: [
      {
        label: 'Agrado',
        data: [145, 108, 79, 79, 78],
        backgroundColor: '#003F63',
      },
      {
        label: 'Baraya',
        data: [57, 40, 40, 134, 118],
        backgroundColor: '#008892',
      },
      {
        label: 'Isnos',
        data: [97, 117, 110, 32, 41],
        backgroundColor: '#FF6766',
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
            text: 'Número de grupos de primaria en alternancia por institución'
          }
        }
      },
    };
  
  alternationdisplayGraph6 = new Chart(alternationgraph6, config);
  alternationsampleGraph6.innerHTML = "Total Muestra: " + sample;
  alternationdisplayGraph6.canvas.parentNode.style.height = '300px';
  alternationdisplayGraph6.canvas.parentNode.style.width = '700px';
}

function institutionGraph7(info, institution){ //mezclaron secundaria y media

  //Falta traer la info

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

const data = {
  labels: ['Sexto', 'Septimo', 'Octavo', 'Noveno', 'Decimo', 'Once'],
  datasets: [
    {
      label: 'Agrado',
      data: [7, 8, 8, 8],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [3, 0, 0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [3, 5, 0, 0],
      backgroundColor: '#FF6766',
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
          text: 'Número de grupos de secundaria y media en alternancia por institucion'
        }
      }
    },
  };

alternationdisplayGraph7 = new Chart(alternationgraph7, config);
alternationsampleGraph7.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph7.canvas.parentNode.style.height = '300px';
alternationdisplayGraph7.canvas.parentNode.style.width = '700px';

}

function institutionGraph9(info, institution){

  //Falta traer la info

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


const data = {
labels: ['Preescolar', 'Primaria', 'Secundaria y Media'],
datasets: [
  {
    label: 'Agrado',
    data: [23, 67, 56],
    backgroundColor: '#003F63',
  },
  {
    label: 'Baraya',
    data: [7, 44, 12],
    backgroundColor: '#008892',
  },
  {
    label: 'Isnos',
    data: [1, 60, 28],
    backgroundColor: '#FF6766',
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
        text: 'Número de docentes en alternancia por nivel escolar por institución'
      }
    }
  },
};

alternationdisplayGraph9 = new Chart(alternationgraph9, config);
alternationsampleGraph9.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph9.canvas.parentNode.style.height = '300px';
alternationdisplayGraph9.canvas.parentNode.style.width = '700px';
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
      campusGraph6(data, campus);
      campusGraph7(data, campus);
      campusGraph8(data, campus);
      campusGraph9(data, campus);
  });
}

function campusGraph1(info, campus) {
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
      data: showData,
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
          text: 'Número de estudiantes de preescolar en alternancia por sede'
        }
      }
    },
  };


  alternationdisplayGraph1 = new Chart(alternationgraph1, config);
  alternationsampleGraph1.innerHTML = "Total Muestra: " + sample;
  alternationdisplayGraph1.canvas.parentNode.style.height = '300px';
  alternationdisplayGraph1.canvas.parentNode.style.width = '700px';
}

function campusGraph2(info, campus){

  //Falta traer la info

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

const data = {
  labels: ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'],
  datasets: [
    {
      label: 'Agrado',
      data: [145, 108, 79, 79, 78],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [57, 40, 40 ,134, 118],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [97, 117, 110, 32, 41],
      backgroundColor: '#FF6766',
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
          text: 'Número de estudiantes de primaria en alternancia por sede'
        }
      }
    },
  };

let alternationdisplayGraph2 = new Chart(alternationgraph2, config);
alternationsampleGraph2.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph2.canvas.parentNode.style.height = '300px';
alternationdisplayGraph2.canvas.parentNode.style.width = '700px';

}

function campusGraph5(info, campus){
  //Falta traer la info

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

const data = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Preescolar',
      data: [8, 7, 1],
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
          text: 'Número de grupos de preescolar en alternancia por sede'
        }
      }
    },
  };

alternationdisplayGraph5 = new Chart(alternationgraph5, config);
alternationsampleGraph5.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph5.canvas.parentNode.style.height = '300px';
alternationdisplayGraph5.canvas.parentNode.style.width = '700px';
}

function campusGraph6(info, campus) {

  //Falta traer la info

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

  const data = {
    labels: ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'],
    datasets: [
      {
        label: 'Agrado',
        data: [145, 108, 79, 79, 78],
        backgroundColor: '#003F63',
      },
      {
        label: 'Baraya',
        data: [57, 40, 40, 134, 118],
        backgroundColor: '#008892',
      },
      {
        label: 'Isnos',
        data: [97, 117, 110, 32, 41],
        backgroundColor: '#FF6766',
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
            text: 'Número de grupos de primaria en alternancia por sede'
          }
        }
      },
    };
  
  alternationdisplayGraph6 = new Chart(alternationgraph6, config);
  alternationsampleGraph6.innerHTML = "Total Muestra: " + sample;
  alternationdisplayGraph6.canvas.parentNode.style.height = '300px';
  alternationdisplayGraph6.canvas.parentNode.style.width = '700px';
}

function campusGraph9(info, campus){

  //Falta traer la info

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


const data = {
labels: ['Preescolar', 'Primaria', 'Secundaria y Media'],
datasets: [
  {
    label: 'Agrado',
    data: [23, 67, 56],
    backgroundColor: '#003F63',
  },
  {
    label: 'Baraya',
    data: [7, 44, 12],
    backgroundColor: '#008892',
  },
  {
    label: 'Isnos',
    data: [1, 60, 28],
    backgroundColor: '#FF6766',
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
        text: 'Número de docentes en alternancia por nivel escolar por sede'
      }
    }
  },
};

alternationdisplayGraph9 = new Chart(alternationgraph9, config);
alternationsampleGraph9.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph9.canvas.parentNode.style.height = '300px';
alternationdisplayGraph9.canvas.parentNode.style.width = '700px';
}

function hideGraphs(){

  document.getElementById("container__graph3").style.display= "none";
  document.getElementById("container__graph4").style.display= "none";
  document.getElementById("container__graph7").style.display= "none";
  document.getElementById("container__graph8").style.display= "none";
  }
  
function showGraphs(){

document.getElementById("container__graph3").style.display= "flex";
document.getElementById("container__graph4").style.display= "flex";
document.getElementById("container__graph7").style.display= "flex";
document.getElementById("container__graph8").style.display= "flex";
}

function destroyGraphs() {
  alternationdisplayGraph1.destroy();
  alternationdisplayGraph2.destroy();
  alternationdisplayGraph3.destroy();
  alternationdisplayGraph4.destroy();
  alternationdisplayGraph5.destroy();
  alternationdisplayGraph6.destroy();
  alternationdisplayGraph7.destroy();
  alternationdisplayGraph8.destroy();
  alternationdisplayGraph9.destroy();
}
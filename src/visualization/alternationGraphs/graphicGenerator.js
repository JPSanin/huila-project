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
  

    let alternationdisplayGraph1 = new Chart(alternationgraph1, config);
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

let alternationdisplayGraph3 = new Chart(alternationgraph3, config);
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

let alternationdisplayGraph4 = new Chart(alternationgraph4, config);
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

let alternationdisplayGraph5 = new Chart(alternationgraph5, config);
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
  
  let alternationdisplayGraph6 = new Chart(alternationgraph6, config);
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

let alternationdisplayGraph7 = new Chart(alternationgraph7, config);
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

let alternationdisplayGraph8 = new Chart(alternationgraph8, config);
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

let alternationdisplayGraph9 = new Chart(alternationgraph9, config);
alternationsampleGraph9.innerHTML = "Total Muestra: " + sample;
alternationdisplayGraph9.canvas.parentNode.style.height = '300px';
alternationdisplayGraph9.canvas.parentNode.style.width = '700px';
}


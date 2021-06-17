let docentesDepartment= document.getElementById("docentesDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataDocentesDepartment = {
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

const configDocentesDepartment = {
    type: 'bar',
    data: dataDocentesDepartment,
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

let docentesDepartmentGraph = new Chart(docentesDepartment, configDocentesDepartment);

docentesDepartmentGraph.canvas.parentNode.style.height = '300px';
docentesDepartmentGraph.canvas.parentNode.style.width = '700px';



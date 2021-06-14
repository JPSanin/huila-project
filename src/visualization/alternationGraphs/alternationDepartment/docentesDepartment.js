let docentesDepartment= document.getElementById("docentesDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataDocentesDepartment = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Preescolar',
      data: [23, 7, 1],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Primaria',
      data: [67, 44, 60],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Secundaria y Media',
      data: [56, 12, 28],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
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



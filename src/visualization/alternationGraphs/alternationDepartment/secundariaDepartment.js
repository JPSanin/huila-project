let secundariaDepartment= document.getElementById("secundariaDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});
const dataSecundariaDepartment = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Sexto',
      data: [147, 40, 44],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Septimo',
      data: [164, 0, 65],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Octavo',
      data: [154, 0, 0],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
    {
      label: 'Noveno',
      data: [142, 0, 0],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,255,0,0.5)',
    },
  ]
};

const configSecundariaDepartment = {
    type: 'bar',
    data: dataSecundariaDepartment,
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

let secundariaDepartmentGraph = new Chart(secundariaDepartment, configSecundariaDepartment);



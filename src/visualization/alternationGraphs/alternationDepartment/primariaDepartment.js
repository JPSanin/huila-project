let primariaDepartment= document.getElementById("primariaDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});
const dataPrimariaDepartment = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Primero',
      data: [145, 57, 97],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Segundo',
      data: [108, 40, 117],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Tercero',
      data: [79, 40, 110],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
    {
      label: 'Cuarto',
      data: [79, 134, 32],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,255,0,0.5)',
    },
    {
      label: 'Quinto',
      data: [78, 118, 41],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,255,0.5)',
    },
  ]
};

const configPrimariaDepartment = {
    type: 'bar',
    data: dataPrimariaDepartment,
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

let primariaDepartmentGraph = new Chart(primariaDepartment, configPrimariaDepartment);



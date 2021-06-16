let secundariaDepartment= document.getElementById("secundariaDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataSecundariaDepartment = {
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

secundariaDepartmentGraph.canvas.parentNode.style.height = '200px';
secundariaDepartmentGraph.canvas.parentNode.style.width = '500px';


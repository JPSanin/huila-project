let grupoSecDepartment= document.getElementById("grupoSecDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataGrupoSecDepartment = {
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

const configGrupoSecDepartment = {
    type: 'bar',
    data: dataGrupoSecDepartment,
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

let grupoSecDepartmentGraph = new Chart(grupoSecDepartment, configGrupoSecDepartment);

grupoSecDepartmentGraph.canvas.parentNode.style.height = '200px';
grupoSecDepartmentGraph.canvas.parentNode.style.width = '500px';



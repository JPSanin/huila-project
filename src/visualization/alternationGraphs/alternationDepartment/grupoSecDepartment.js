let grupoSecDepartment= document.getElementById("grupoSecDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});
const dataGrupoSecDepartment = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Sexto',
      data: [7, 3, 3],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Septimo',
      data: [8, 0, 5],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Octavo',
      data: [8, 0, 0],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
    {
      label: 'Noveno',
      data: [8, 0, 0],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,255,0,0.5)',
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



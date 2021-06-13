let grupoMedDepartment= document.getElementById("grupoMedDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});
const dataGrupoMedDepartment = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Decimo',
      data: [7, 0, 1],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Once',
      data: [6, 0, 1],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
  ]
};

const configGrupoMedDepartment = {
    type: 'bar',
    data: dataGrupoMedDepartment,
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

let grupoMedDepartmentGraph = new Chart(grupoMedDepartment, configGrupoMedDepartment);



let grupoPreDepartment= document.getElementById("grupoPreDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});
const dataGrupoPreDepartment = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Preescolar',
      data: [8, 7, 1],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
  ]
};

const configGrupoPreDepartment = {
    type: 'bar',
    data: dataGrupoPreDepartment,
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

let grupoPreDepartmentGraph = new Chart(grupoPreDepartment, configGrupoPreDepartment);



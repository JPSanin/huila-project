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
      backgroundColor: ['#003F63', '#008892', '#FF6766'],
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

grupoPreDepartmentGraph.canvas.parentNode.style.height = '300px';
grupoPreDepartmentGraph.canvas.parentNode.style.width = '700px';



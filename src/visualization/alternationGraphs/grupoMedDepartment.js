let grupoMedDepartment= document.getElementById("grupoMedDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataGrupoMedDepartment = {
  labels: ['Decimo', 'Once',],
  datasets: [
    {
      label: 'Agrado',
      data: [7, 6],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [1, 1],
      backgroundColor: '#FF6766',
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

grupoMedDepartmentGraph.canvas.parentNode.style.height = '300px';
grupoMedDepartmentGraph.canvas.parentNode.style.width = '700px';



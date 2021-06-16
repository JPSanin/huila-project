let grupoPriDepartment= document.getElementById("grupoPriDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataGrupoPriDepartment = {
  labels: ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'],
  datasets: [
    {
      label: 'Agrado',
      data: [145, 108, 79, 79, 78],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [57, 40, 40, 134, 118],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [97, 117, 110, 32, 41],
      backgroundColor: '#FF6766',
    },
  ]
};

const configGrupoPriDepartment = {
    type: 'bar',
    data: dataGrupoPriDepartment,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de grupos de primaria en alternancia por departamento'
        }
      }
    },
  };

let grupoPriDepartmentGraph = new Chart(grupoPriDepartment, configGrupoPriDepartment);

grupoPriDepartmentGraph.canvas.parentNode.style.height = '200px';
grupoPriDepartmentGraph.canvas.parentNode.style.width = '500px';



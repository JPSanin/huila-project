let mediaDepartment= document.getElementById("mediaDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataMediaDepartment = {
  labels: ['Decimo', 'Once'],
  datasets: [
    {
      label: 'Agrado',
      data: [146, 132],
      backgroundColor: '#003F63',
    },
    {
      label: 'Baraya',
      data: [0, 0],
      backgroundColor: '#008892',
    },
    {
      label: 'Isnos',
      data: [8, 8],
      backgroundColor: '#FF6766',
    },
  ]
};

const configMediaDepartment = {
    type: 'bar',
    data: dataMediaDepartment,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de estudiantes de media en alternancia por departamento'
        }
      }
    },
  };

let mediaDepartmentGraph = new Chart(mediaDepartment, configMediaDepartment);

mediaDepartmentGraph.canvas.parentNode.style.height = '300px';
mediaDepartmentGraph.canvas.parentNode.style.width = '700px';



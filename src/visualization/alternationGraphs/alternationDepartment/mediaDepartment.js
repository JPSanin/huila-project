let mediaDepartment= document.getElementById("mediaDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});
const dataMediaDepartment = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Decimo',
      data: [146, 0, 8],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Once',
      data: [132, 0, 8],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
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



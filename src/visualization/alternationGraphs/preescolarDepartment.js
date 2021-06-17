let preescolarDepartment= document.getElementById("preescolarDepartment");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataPreescolarDepartment = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Preescolar',
      data: [122, 81, 8],
      backgroundColor: ['#003F63', '#008892', '#FF6766'],
    },
  ]
};

const configPreescolarDepartment = {
    type: 'bar',
    data: dataPreescolarDepartment,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de estudiantes de preescolar en alternancia por departamento'
        }
      }
    },
  };

let preescolarDepartmentGraph = new Chart(preescolarDepartment, configPreescolarDepartment);

preescolarDepartmentGraph.canvas.parentNode.style.height = '300px';
preescolarDepartmentGraph.canvas.parentNode.style.width = '700px';



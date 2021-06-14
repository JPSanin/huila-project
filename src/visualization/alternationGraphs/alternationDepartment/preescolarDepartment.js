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
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
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



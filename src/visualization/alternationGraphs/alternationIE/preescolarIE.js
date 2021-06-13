let preescolarIE= document.getElementById("preescolarIE");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataPreescolarIE = {
  labels: ['La Odina','Las Orquídeas','San Antonio'],
  datasets: [
    {
      label: 'Número de estudiantes',
      data: [40, 6, 63],
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    
  ]
};

const configPreescolarIE = {
    type: 'bar',
    data: dataPreescolarIE,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de estudiantes de preescolar en alternancia en IE MONTESITOS'
        }
      }
    },
  };

let preescolarIEGraph = new Chart(preescolarIE, configPreescolarIE);


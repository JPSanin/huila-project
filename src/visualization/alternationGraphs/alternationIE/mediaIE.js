let mediaIE= document.getElementById("mediaIE");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataMediaIE = {
  labels: ['La Odina', 'Las Orquídeas', 'San Antonio'],
  datasets: [
    {
      label: 'Decimo',
      data: [0, 0, 89],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Once',
      data: [0, 0, 67],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
  ]
};

const configMediaIE = {
    type: 'bar',
    data: dataMediaIE,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de estudiantes de media en alternancia en IE MONTESITOS'
        }
      }
    },
  };

let mediaIEGraph = new Chart(mediaIE, configMediaIE);



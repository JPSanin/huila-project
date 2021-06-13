let secundariaIE= document.getElementById("secundariaIE");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataSecundariaIE = {
  labels: ['La Odina', 'Las Orquídeas', 'San Antonio'],
  datasets: [
    {
      label: 'Sexto',
      data: [0, 0, 68],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Septimo',
      data: [0, 0, 69],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Octavo',
      data: [0, 0, 79],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
    {
      label: 'Noveno',
      data: [0, 0, 78],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,255,0,0.5)',
    },
  ]
};

const configSecundariaIE = {
    type: 'bar',
    data: dataSecundariaIE,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de estudiantes de secundaria en alternancia en IE Montesitos'
        }
      }
    },
  };

let secundariaIEGraph = new Chart(secundariaIE, configSecundariaIE);



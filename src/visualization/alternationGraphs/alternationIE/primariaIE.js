let primariaIE= document.getElementById("primariaIE");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataPrimariaIE = {
  labels: ['La Odina', 'Las Orquídeas', 'San Antonio'],
  datasets: [
    {
      label: 'Primero',
      data: [30, 10, 87],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Segundo',
      data: [0, 10, 77],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Tercero',
      data: [0, 2, 67],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
    {
      label: 'Cuarto',
      data: [0, 13, 55],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,255,0,0.5)',
    },
    {
      label: 'Quinto',
      data: [0, 15, 60],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,255,0.5)',
    },
  ]
};

const configPrimariaIE = {
    type: 'bar',
    data: dataPrimariaIE,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de estudiantes de primaria en alternancia en IE MONTESITOS'
        }
      }
    },
  };

let primariaIEGraph = new Chart(primariaIE, configPrimariaIE);



let grupoPriIE= document.getElementById("grupoPriIE");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataGrupoPriIE = {
  labels: ['La Odina', 'Las Orquídeas', 'San Antonio'],
  datasets: [
    {
      label: 'Primero',
      data: [2, 1, 5],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Segundo',
      data: [0, 1, 4],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Tercero',
      data: [0, 1, 3],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
    {
      label: 'Cuarto',
      data: [0, 1, 2],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,255,0,0.5)',
    },
    {
      label: 'Quinto',
      data: [0, 1, 3],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,255,0.5)',
    },
  ]
};

const configGrupoPriIE = {
    type: 'bar',
    data: dataGrupoPriIE,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de grupos de primaria en alternancia en IE MONTESITOS'
        }
      }
    },
  };

let grupoPriIEGraph = new Chart(grupoPriIE, configGrupoPriIE);



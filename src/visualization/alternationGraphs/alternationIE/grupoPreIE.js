let grupoPreIE= document.getElementById("grupoPreIE");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataGrupoPreIE = {
  labels: ['La Odina', 'Las Orquídeas', 'San Antonio'],
  datasets: [
    {
      label: 'Número de Grupos',
      data: [2, 1, 3],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
  ]
};

const configGrupoPreIE = {
    type: 'bar',
    data: dataGrupoPreIE,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de grupos de preescolar en alternancia en IE MONTESITOS'
        }
      }
    },
  };

let grupoPreIEGraph = new Chart(grupoPreIE, configGrupoPreIE);



let grupoMedIE= document.getElementById("grupoMedIE");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataGrupoMedIE = {
  labels: ['La Odina', 'Las Orquídeas', 'San Antonio'],
  datasets: [
    {
      label: 'Decimo',
      data: [0, 0, 4],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Once',
      data: [0, 0, 3],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
  ]
};

const configGrupoMedIE = {
    type: 'bar',
    data: dataGrupoMedIE,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de grupos de media en alternancia en IE MONTESITOS'
        }
      }
    },
  };

let grupoMedIEGraph = new Chart(grupoMedIE, configGrupoMedIE);



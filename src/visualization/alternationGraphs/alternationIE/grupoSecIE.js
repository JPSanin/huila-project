let grupoSecIE= document.getElementById("grupoSecIE");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataGrupoSecIE = {
  labels: ['La Odina', 'Las Orquídeas', 'San Antonio'],
  datasets: [
    {
      label: 'Sexto',
      data: [0, 0, 3],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Septimo',
      data: [0, 0, 3],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Octavo',
      data: [0, 0, 4],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
    {
      label: 'Noveno',
      data: [0, 0, 4],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,255,0,0.5)',
    },
  ]
};

const configGrupoSecIE = {
    type: 'bar',
    data: dataGrupoSecIE,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de grupos de secundaria en alternancia en IE MONTESITOS'
        }
      }
    },
  };

let grupoSecIEGraph = new Chart(grupoSecIE, configGrupoSecIE);



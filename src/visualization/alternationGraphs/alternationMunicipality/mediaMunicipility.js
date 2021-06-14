let mediaMunicipility= document.getElementById("mediaMunicipility");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataMediaMunicipility = {
  labels: ['Montesitos', 'EL Carmen', 'La Merced'],
  datasets: [
    {
      label: 'Decimo',
      data: [89, 57, 0],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Once',
      data: [67, 65, 0],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
  ]
};

const configMediaMunicipility = {
    type: 'bar',
    data: dataMediaMunicipility,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de estudiantes de media en alternancia por municipio'
        }
      }
    },
  };

let mediaMunicipilityGraph = new Chart(mediaMunicipility, configMediaMunicipility);



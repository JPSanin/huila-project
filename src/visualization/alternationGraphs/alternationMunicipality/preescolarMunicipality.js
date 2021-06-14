let preescolarMunicipality= document.getElementById("preescolarMunicipality");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataPreescolarMunicipality = {
  labels: ['Montesitos', 'El Carmen', 'La Merced'],
  datasets: [
    {
      label: 'Preescolar',
      data: [109, 0, 13],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
  ]
};

const configPreescolarMunicipality = {
    type: 'bar',
    data: dataPreescolarMunicipality,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de estudiantes de Preescolar en alternancia por municipio'
        }
      }
    },
  };

let preescolarMunicipalityGraph = new Chart(preescolarMunicipality, configPreescolarMunicipality);



let secundariaMunicipality= document.getElementById("secundariaMunicipality");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataSecundariaMunicipality = {
  labels: ['Montesitos', 'EL Carmen', 'La Merced'],
  datasets: [
    {
      label: 'Sexto',
      data: [68, 67, 12],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Septimo',
      data: [69, 80, 15],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Octavo',
      data: [79, 67, 8],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
    {
      label: 'Noveno',
      data: [78, 60, 4],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,255,0,0.5)',
    },
  ]
};

const configSecundariaMunicipality = {
    type: 'bar',
    data: dataSecundariaMunicipality,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de estudiantes de secundaria en alternancia por municipio'
        }
      }
    },
  };

let secundariaMunicipalityGraph = new Chart(secundariaMunicipality, configSecundariaMunicipality);


let grupoSecMunicipality= document.getElementById("grupoSecMunicipality");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataGrupoSecMunicipality = {
  labels: ['Montesitos', 'EL Carmen', 'La Merced'],
  datasets: [
    {
      label: 'Sexto',
      data: [3, 3, 1],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Septimo',
      data: [3, 4, 1],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Octavo',
      data: [4, 3, 1],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
    {
      label: 'Noveno',
      data: [4, 3, 1],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,255,0,0.5)',
    },
  ]
};

const configGrupoSecMunicipality = {
    type: 'bar',
    data: dataGrupoSecMunicipality,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de grupos de secundaria en alternancia por municipio'
        }
      }
    },
  };

let grupoSecMunicipalityGraph = new Chart(grupoSecMunicipality, configGrupoSecMunicipality);



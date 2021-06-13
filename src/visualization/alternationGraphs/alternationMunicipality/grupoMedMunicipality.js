let grupoMedMunicipality= document.getElementById("grupoMedMunicipality");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataGrupoMedMunicipality = {
  labels: ['Montesitos', 'EL Carmen', 'La Merced'],
  datasets: [
    {
      label: 'Decimo',
      data: [4, 3, 0],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Once',
      data: [3, 3, 0],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
  ]
};

const configGrupoMedMunicipality = {
    type: 'bar',
    data: dataGrupoMedMunicipality,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de grupos de media en alternancia por municipio'
        }
      }
    },
  };

let grupoMedMunicipalityGraph = new Chart(grupoMedMunicipality, configGrupoMedMunicipality);



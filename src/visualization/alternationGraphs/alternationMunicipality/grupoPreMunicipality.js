let grupoPreMunicipality= document.getElementById("grupoPreMunicipality");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataGrupoPreMunicipality = {
  labels: ['Montesitos', 'El Carmen', 'La Merced'],
  datasets: [
    {
      label: 'Preescolar',
      data: [6, 0, 2],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
  ]
};

const configGrupoPreMunicipality = {
    type: 'bar',
    data: dataGrupoPreMunicipality,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de grupos de preescolar en alternancia por municipio'
        }
      }
    },
  };

let grupoPreMunicipalityGraph = new Chart(grupoPreMunicipality, configGrupoPreMunicipality);



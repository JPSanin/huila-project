let docentesMunicipality= document.getElementById("docentesMunicipality");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataDocentesMunicipality = {
  labels: ['Montesitos', 'El Carmen', 'La Merced'],
  datasets: [
    {
      label: 'Preescolar',
      data: [21, 0, 2],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Primaria',
      data: [43, 0, 24],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Secundaria y Media',
      data: [16, 25, 15],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
  ]
};

const configDocentesMunicipality = {
    type: 'bar',
    data: dataDocentesMunicipality,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de docentes en alternancia por nivel escolar por municipio'
        }
      }
    },
  };

let docentesMunicipalityGraph = new Chart(docentesMunicipality, configDocentesMunicipality);



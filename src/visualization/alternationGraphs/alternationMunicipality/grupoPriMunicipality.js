let grupoPriMunicipality= document.getElementById("grupoPriMunicipality");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataGrupoPriMunicipality = {
  labels: ['Montesitos', 'El Carmen', 'La Merced'],
  datasets: [
    {
      label: 'Primero',
      data: [8, 0, 2],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Segundo',
      data: [5, 0, 3],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Tercero',
      data: [4, 0, 1],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
    {
      label: 'Cuarto',
      data: [3, 0, 2],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,255,0,0.5)',
    },
    {
      label: 'Quinto',
      data: [4, 0, 1],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,255,0.5)',
    },
  ]
};

const configGrupoPriMunicipality = {
    type: 'bar',
    data: dataGrupoPriMunicipality,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de grupos de primaria en alternancia por municipio'
        }
      }
    },
  };

let grupoPriMunicipalityGraph = new Chart(grupoPriMunicipality, configGrupoPriMunicipality);



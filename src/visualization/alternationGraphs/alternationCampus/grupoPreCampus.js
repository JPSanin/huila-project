let grupoPreCampus= document.getElementById("grupoPreCampus");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataGrupoPreCampus = {
  labels: ['Preescolar'],
  datasets: [
    {
      label: 'Número de grupos',
      data: [2],
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
  ]
};

const configGrupoPreCampus = {
    type: 'bar',
    data: dataGrupoPreCampus,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de grupos de preescolar en alternancia en SEDE LA ODINA'
        }
      }
    },
  };

let grupoPreCampusGraph = new Chart(grupoPreCampus, configGrupoPreCampus);



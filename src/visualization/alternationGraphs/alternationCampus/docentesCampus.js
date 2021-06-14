let docentesCampus= document.getElementById("docentesCampus");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});
const dataDocentesCampus = {
  labels: ['Preescolar', 'Primaria', 'Secundaria y Media'],
  datasets: [
    {
      label: 'Número de docentes',
      data: [12, 10, 0],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
  ]
};

const configDocentesCampus = {
    type: 'bar',
    data: dataDocentesCampus,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de docentes en alternancia por nivel escolar en SEDE LA ODINA'
        }
      }
    },
  };

let dataDocentesCampusGraphs = new Chart(docentesCampus, configDocentesCampus);



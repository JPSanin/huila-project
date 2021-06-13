let docentesIE= document.getElementById("docentesIE");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataDocentesIE = {
  labels: ['Montesitos', 'El Carmen', 'La Merced'],
  datasets: [
    {
      label: 'Preescolar',
      data: [12, 1, 8],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Primaria',
      data: [10, 17, 16],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Secundaria y Media',
      data: [0, 0, 16],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
  ]
};

const configDocentesIE = {
    type: 'bar',
    data: dataDocentesIE,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de docentes en alternancia por nivel escolar en IE MONTESITOS'
        }
      }
    },
  };

let docentesIEGraph = new Chart(docentesIE, configDocentesIE);



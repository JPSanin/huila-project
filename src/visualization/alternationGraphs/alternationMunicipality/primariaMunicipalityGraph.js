let primariaMunicipality= document.getElementById("primariaMunicipality");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataPrimariaMunicipality = {
  labels: ['Montesitos', 'El Carmen', 'La Merced'],
  datasets: [
    {
      label: 'Primero',
      data: [127, 0, 18],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
    {
      label: 'Segundo',
      data: [87, 0, 21],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,0,0.5)',
    },
    {
      label: 'Tercero',
      data: [69, 0, 10],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
    {
      label: 'Cuarto',
      data: [68, 0, 11],
      borderColor: 'Blue',
      backgroundColor: 'rgba(255,255,0,0.5)',
    },
    {
      label: 'Quinto',
      data: [75, 0, 3],
      borderColor: 'Blue',
      backgroundColor: 'rgba(0,255,255,0.5)',
    },
  ]
};

const configPrimariaMunicipality = {
    type: 'bar',
    data: dataPrimariaMunicipality,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de estudiantes de primaria en alternancia por municipio'
        }
      }
    },
  };

let primariaMunicipalityGraph = new Chart(primariaMunicipality, configPrimariaMunicipality);


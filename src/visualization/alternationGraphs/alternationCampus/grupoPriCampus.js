let grupoPriCampus= document.getElementById("grupoPriCampus");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});
const dataGrupoPriCampus = {
  labels: ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'],
  datasets: [
    {
      label: 'Número de grupos',
      data: [2,0,0,0,0],
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,255,0.5)',
    },
  ]
};

const configGrupoPriCampus = {
    type: 'bar',
    data: dataGrupoPriCampus,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de grupos de primaria en alternancia en SEDE LA ODINA'
        }
      }
    },
  };

let grupoPriCampusGraph = new Chart(grupoPriCampus, configGrupoPriCampus);



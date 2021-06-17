let capacityEstudents= document.getElementById("capacityEstudents");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataCapacityEstudents = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Dataset',
      data: [3125, 2246, 1587],
      backgroundColor: ['#003F63', '#008892', '#FF6766'],
    },
  ]
};

const configCapacityEstudents = {
    type: 'bar',
    data: dataCapacityEstudents,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Estudiantes matriculados por municipio'
        }
      }
    },
  };

let capacityEstudentsGraph = new Chart(capacityEstudents, configCapacityEstudents);

capacityEstudentsGraph.canvas.parentNode.style.height = '300px';
capacityEstudentsGraph.canvas.parentNode.style.width = '700px';



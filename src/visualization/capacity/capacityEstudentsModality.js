let capacityEstudentsModality= document.getElementById("capacityEstudentsModality");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataCapacityEstudentsModality = {
  labels: ['Remoto', 'Alternancia/Presencialidad'],
  datasets: [
    {
      label: 'Dataset',
      data: [4366],
      backgroundColor: '#003F63',
    },
    {
      label: 'Dataset2',
      data: [2592],
      backgroundColor: '#008892',
    },
  ]
};

const configCapacityEstudentsModality = {
    type: 'bar',
    data: dataCapacityEstudentsModality,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Estudiantes matriculados de acuerdo a la modalidad'
        }
      }
    },
  };

let capacityEstudentsModalityGraph = new Chart(capacityEstudentsModality, configCapacityEstudentsModality);

capacityEstudentsModalityGraph.canvas.parentNode.style.height = '300px';
capacityEstudentsModalityGraph.canvas.parentNode.style.width = '700px';



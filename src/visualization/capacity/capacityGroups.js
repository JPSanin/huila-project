let capacityGroups= document.getElementById("capacityGroups");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataCapacityGroups = {
  labels: ['Agrado', 'Baraya', 'Isnos'],
  datasets: [
    {
      label: 'Dataset',
      data: [88, 40, 42],
      backgroundColor: ['#003F63', '#008892', '#FF6766'],
    },
  ]
};

const configCapacityGroups = {
    type: 'bar',
    data: dataCapacityGroups,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de grupos en alternancia/presencialidad por municipios'
        }
      }
    },
  };

let capacityGroupsGraph = new Chart(capacityGroups, configCapacityGroups);

capacityGroupsGraph.canvas.parentNode.style.height = '300px';
capacityGroupsGraph.canvas.parentNode.style.width = '700px';



let capacityEstudentsAlternation= document.getElementById('capacityEstudentsAlternation');

const dataCapacityEstudentsAlternation = {
    labels: ['Agrado', 'Baraya', 'Isnos'],
    datasets: [{
      label: 'My First Dataset',
      data: [59, 21, 20],
      backgroundColor: ['#003F63', '#008892', '#FF6766'],
      hoverOffset: 4
    }]
  };

  const configCapacityEstudentsAlternation = {
    type: 'doughnut',
    data: dataCapacityEstudentsAlternation,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Estudiantes matriculados en presencialidad/alternancia por municipio'
        }
      }
    },
  };

  let capacityEstudentsAlternationGraph = new Chart(capacityEstudentsAlternation, configCapacityEstudentsAlternation);

  capacityEstudentsAlternationGraph.canvas.parentNode.style.height = '300px';
  capacityEstudentsAlternationGraph.canvas.parentNode.style.width = '700px';
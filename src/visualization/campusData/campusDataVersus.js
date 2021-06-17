let campusDataVersus = document.getElementById('campusDataVersus');

const dataCampusDataVersus = {
    labels: [
      'Alternancia/Presencialidad y Ajuste de protocolos',
      'Alternancia/Presencialidad y No ajuste de protocolos',
      'Remoto y No ajuste de protocolos',
      'Remoto y Si ajuste de protocolos'],
    datasets: [{
      label: 'My First Dataset',
      data: [16, 10, 5, 3],
      backgroundColor: ['#003F63', '#008892', '#FF6766', '#FDC967', '#C5C789', '#83B8D7'],
      hoverOffset: 4
    }]
  };

  const configCampusDataVersus = {
    type: 'doughnut',
    data: dataCampusDataVersus,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Diagnósticos de bioseguridad en las sedes'
        }
      }
    },
  };

  let campusDataVersusGraph = new Chart(campusDataVersus, configCampusDataVersus);

  campusDataVersusGraph.canvas.parentNode.style.height = '300px';
  campusDataVersusGraph.canvas.parentNode.style.width = '700px';
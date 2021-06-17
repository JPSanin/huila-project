let campusDataProtocol = document.getElementById('campusDataProtocol');

const dataCampusDataProtocol = {
    labels: [
      'Si se realizó un ajuste de protocolos de bioseguridad',
      'No se realizó un ajuste de protocolos de bioseguridad'],
    datasets: [{
      label: 'My First Dataset',
      data: [19, 15],
      backgroundColor: ['#003F63', '#008892', '#FF6766', '#FDC967', '#C5C789', '#83B8D7'],
      hoverOffset: 4
    }]
  };

  const configCampusDataProtocol = {
    type: 'doughnut',
    data: dataCampusDataProtocol,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Revisión y ajuste de los protocolos de bioseguridad'
        }
      }
    },
  };

  let campusDataProtocolGraph = new Chart(campusDataProtocol, configCampusDataProtocol);

  campusDataProtocolGraph.canvas.parentNode.style.height = '300px';
  campusDataProtocolGraph.canvas.parentNode.style.width = '700px';
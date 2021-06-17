let campusDataBiosegurity= document.getElementById('campusDataBiosegurity');

const dataCampusDataBiosegurity = {
    labels: ['Sí hay un diagnostico de bioseguridad',
    'No hay un diagnostico de bioseguridad'],
    datasets: [{
      label: 'My First Dataset',
      data: [19, 15],
      backgroundColor: ['#003F63', '#008892', '#FF6766', '#FDC967', '#C5C789', '#83B8D7'],
      hoverOffset: 4
    }]
  };

  const configCampusDataBiosegurity = {
    type: 'doughnut',
    data: dataCampusDataBiosegurity,
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

  let campusDataBiosegurityGraph = new Chart(campusDataBiosegurity, configCampusDataBiosegurity);

  campusDataBiosegurityGraph.canvas.parentNode.style.height = '400px';
  campusDataBiosegurityGraph.canvas.parentNode.style.width = '400px';
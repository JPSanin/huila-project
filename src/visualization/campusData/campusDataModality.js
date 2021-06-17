let campusDataModality= document.getElementById('campusDataModality');

const dataCampusDataModality = {
    labels: ['Alternancia', 'Retorno', 'Presencial'],
    datasets: [{
      label: 'My First Dataset',
      data: [22, 8, 4],
      backgroundColor: ['#003F63', '#008892', '#FF6766'],
      hoverOffset: 4
    }]
  };

  const configCampusDataModality = {
    type: 'doughnut',
    data: dataCampusDataModality,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Modalidad de las sedes en el departamento'
        }
      }
    },
  };

  let campusDataModalityGraph = new Chart(campusDataModality, configCampusDataModality);

  campusDataModalityGraph.canvas.parentNode.style.height = '300px';
  campusDataModalityGraph.canvas.parentNode.style.width = '700px';
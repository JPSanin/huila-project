let campusDataAttendance = document.getElementById('campusDataAttendance');

const dataCampusDataAttendance = {
    labels: ['1 Dia', '2 Dias', '3 Dias', '4 Dias', '5 Dias'],
    datasets: [{
      label: 'My First Dataset',
      data: [0, 5, 11, 0, 6],
      backgroundColor: ['#003F63', '#008892', '#FF6766', '#FDC967', '#C5C789', '#83B8D7'],
      hoverOffset: 4
    }]
  };

  const configCampusDataAttendance= {
    type: 'doughnut',
    data: dataCampusDataAttendance,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Cantidad de días asistiendo a las sedes para aquellos que están en alternacia'
        }
      }
    },
  };

  let campusDataAttendanceGraph = new Chart(campusDataAttendance, configCampusDataAttendance);

  campusDataAttendanceGraph.canvas.parentNode.style.height = '300px';
  campusDataAttendanceGraph.canvas.parentNode.style.width = '700px';
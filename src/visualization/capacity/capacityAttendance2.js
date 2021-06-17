let capacityAttendance2 = document.getElementById("capacityAttendance2");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataCapacityAttendance2 = {
    labels: ['Personal administrativo de aseo', 'Personal administrativo', 'Docentes',
            'Directivos', 'Estudiantes'],
    datasets: [
      {
        label: 'Dataset',
        data: [17, 31, 308, 140, 2592],
        backgroundColor: ['#83B8D7', '#FDC967', '#008892', '#FF6766', '#003F63'],
      },
    ]
  };
  
  const configCapacityAttendance2 = {
    type: 'bar',
    data: dataCapacityAttendance2,
    options: {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
          display: false,
        },
        title: {
          display: true,
          text: 'Cantidad de personas asistiendo en modalidad completa o alternancia de acuerdo al perfil'
        }
      }
    },
  };
  
    let capacityAttendance2Graph = new Chart(capacityAttendance2, configCapacityAttendance2);

    capacityAttendance2Graph.canvas.parentNode.style.height = '300px';
    capacityAttendance2Graph.canvas.parentNode.style.width = '700px';
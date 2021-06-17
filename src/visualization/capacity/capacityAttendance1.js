let capacityAttendance1 = document.getElementById("capacityAttendance1");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

const dataCapacityAttendance1 = {
    labels: ['Isnos', 'Baraya', 'Agrado'],
    datasets: [
      {
        label: 'Dataset',
        data: [654, 684, 1750],
        backgroundColor: ['#FF6766', '#008892', '#003F63'],
      },
    ]
  };
  
  const configCapacityAttendance1 = {
    type: 'bar',
    data: dataCapacityAttendance1,
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
          text: 'Cantidad de personas asistiendo en modalidad completa o alternancia de acuerdo al municipio'
        }
      }
    },
  };
  
    let capacityAttendance1Graph = new Chart(capacityAttendance1, configCapacityAttendance1);

    capacityAttendance1Graph.canvas.parentNode.style.height = '300px';
    capacityAttendance1Graph.canvas.parentNode.style.width = '700px';
let graph7 = document.getElementById("graph7");
let sampleGraph7 = document.getElementById("sampleGraph7");

let sample7 = 0;

const dataGraph7 = {
    labels: ['Estudiantes que han recibido Sim-card ', 
              'Estudiantes matriculados que no han recibido Sim-card'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [23, 89],
        backgroundColor: ['#003F63', '#008892', '#FF6766','#FDC967', '#C5C789', '#83B8D7']
      }
    ]
  };
  
  const configGraph7 = {
      type: 'doughnut',
      data: dataGraph7,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Estudiantes que han recibido Sim-card en SEDE'
          }
        }
      },
    };

    let graph7Visible = new Chart(graph7, configGraph7);
    sampleGraph7.innerHTML="Muestra "+ sample7; 
let graph5 = document.getElementById("graph5");
let sampleGraph5 = document.getElementById("sampleGraph5");

let sample5 = 0;

const dataGraph5 = {
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
  
  const configGraph5 = {
      type: 'doughnut',
      data: dataGraph5,
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

    let graph5Visible = new Chart(graph5, configGraph5);
    sampleGraph5.innerHTML="Muestra "+ sample5; 
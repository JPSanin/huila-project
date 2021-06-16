let graph8 = document.getElementById("graph8");
let sampleGraph8 = document.getElementById("sampleGraph8");

let sample8 = 0;

const dataGraph8 = {
    labels: ["Cantidad"],
    datasets: [
      {
        label: 'Prestados',
        data: [10],
        backgroundColor:'#003F63',
      },
      {
        label: 'Por prestar',
        data: [23],
        backgroundColor: '#008892',
      },
    ]
  };
  
  const configGraph8 = {
      type: 'bar',
      data: dataGraph8,
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Total de perifericos por sede '
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      }
    };

    let graph8Visible = new Chart(graph8, configGraph8);
    sampleGraph8.innerHTML="Muestra "+ sample8; 
    graph8Visible.canvas.parentNode.style.height = '300px';
    graph8Visible.canvas.parentNode.style.width = '700px';
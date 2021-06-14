let graph4 = document.getElementById("graph4");
let sampleGraph4 = document.getElementById("sampleGraph4");

let sample4 = 0;

const dataGraph4 = {
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
  
  const configGraph4 = {
      type: 'bar',
      data: dataGraph4,
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

    let graph4Visible = new Chart(graph4, configGraph4);
    sampleGraph4.innerHTML="Muestra "+ sample4; 
    graph4Visible.canvas.parentNode.style.height = '300px';
    graph4Visible.canvas.parentNode.style.width = '400px';
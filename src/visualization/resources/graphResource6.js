let graph6 = document.getElementById("graph6");
let sampleGraph6 = document.getElementById("sampleGraph6");

let sample6 = 0;

const dataGraph6 = {
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
  
  const configGraph6 = {
      type: 'bar',
      data: dataGraph6,
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

    let graph6Visible = new Chart(graph6, configGraph6);
    sampleGraph6.innerHTML="Muestra "+ sample6; 
    graph6Visible.canvas.parentNode.style.height = '300px';
    graph6Visible.canvas.parentNode.style.width = '700px';
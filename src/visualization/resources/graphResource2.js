let graph2 = document.getElementById("graph2");
let sampleGraph2 = document.getElementById("sampleGraph2");

let sample2 = 0;

const dataGraph2 = {
    labels: ["May","June","July","August"],
    datasets: [
      {
        label: 'Dataset 1',
        data: [4,6,7,9],
        borderColor: ['#003F63', '#008892', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
        backgroundColor: ['#003F63', '#008892', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
      },
      {
        label: 'Dataset 2',
        data: [7,10,6,5],
        borderColor: ['#003F63', '#008892', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
        backgroundColor: ['#003F63', '#008892', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
      }
    ]
  };
  
  const configGraph2 = {
      type: 'bar',
      data: dataGraph2,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Número de hogares sin servicio de internet por sedes en la institución'
          }
        }
      },
    };

    let graph2Visible = new Chart(graph2, configGraph2);
    sampleGraph2.innerHTML="Muestra "+ sample2; 
    graph2Visible.canvas.parentNode.style.height = '300px';
    graph2Visible.canvas.parentNode.style.width = '700px';
let graph3 = document.getElementById("graph3");
let sampleGraph3 = document.getElementById("sampleGraph3");

let sample3 = 0;

const dataGraph3 = {
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
  
  const configGraph3 = {
      type: 'bar',
      data: dataGraph3,
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

    let graph3Visible = new Chart(graph3, configGraph3);
    sampleGraph3.innerHTML="Muestra "+ sample3; 
    graph3Visible.canvas.parentNode.style.height = '300px';
    graph3Visible.canvas.parentNode.style.width = '700px';
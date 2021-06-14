let graph1 = document.getElementById("graph1");
let sampleGraph1 = document.getElementById("sampleGraph1");

let sample1 = 0;

const dataGraph1 = {
    labels: ['Más de 6 estudiantes', '6 estudiantes', '5 estudiantes', '4 estudiantes',
            '3 estudiantes', '2 estudiantes', '1 estudiante'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [5, 3, 5, 12, 9, 8, 4],
        backgroundColor: ['#003F63', '#008892', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
      },
    ]
  };
  
  const configGraph1 = {
    type: 'bar',
    data: dataGraph1,
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
          text: 'Hogares sin servicio de internet por número de estudiantes por SEDE'
        }
      }
    },
  };
  
    let graph1Visible = new Chart(graph1, configGraph1);
    sampleGraph1.innerHTML="Muestra "+ sample1; 
    graph1Visible.canvas.parentNode.style.height = '300px';
    graph1Visible.canvas.parentNode.style.width = '600px';
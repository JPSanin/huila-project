let estrategiasVirtualesDIE= document.getElementById("estrategiasVirtualesDIE");

let sampleVirtualesDIE = 0;

const dataDIE3 = {
  labels: ["Agrado","Baraya","Isno"],
  datasets: [
    {
      label: 'Estudiantes',
      data: [10,14,119],
      borderColor: 'blue',
      backgroundColor: ['#008892', '#003F63', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
    }
  ]
};

const configDIE3 = {
    type: 'bar',
    data: dataDIE3,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: ' Estudiantes atendidos por otras estrategias digitales en el municipio de Agrado por IE'
        }
      }
    },
  };

let estrategiasVirtualesDIEVer= new Chart(estrategiasVirtualesDIE,configDIE3);
sampleVirtual2.innerHTML="Muestra "+ sampleVirtualesDIE; 
estrategiasVirtualesDIEVer.canvas.parentNode.style.height = '199px';
estrategiasVirtualesDIEVer.canvas.parentNode.style.width = '400px'
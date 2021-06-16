let estrategiasVirtualesDN= document.getElementById("estrategiasVirtualesDN");

let sampleVirtualesDN = 0;

const dataDN3 = {
  labels: ["Preescolar","Primaria","Secundaria","Media"],
  datasets: [
    {
      label: 'Estudiantes',
      data: [12,80,33,18],
      borderColor: 'blue',
      backgroundColor:  ['#008892', '#003F63', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
    }
  ]
  
};

const configDN3 = {
    type: 'bar',
    data: dataDN3,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: ' Estudiantes atendidos por otras estrategias digitales en el departamento por nivel'
        }
      }
    },
  };

let estrategiasVirtualesDNVer= new Chart(estrategiasVirtualesDN,configDN3);
sampleVirtual1.innerHTML="Muestra "+ sampleVirtualesDN; 
estrategiasVirtualesDNVer.canvas.parentNode.style.height = '350px';
estrategiasVirtualesDNVer.canvas.parentNode.style.width = '700px';
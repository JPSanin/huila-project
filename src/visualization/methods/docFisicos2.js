let docFisicosDIE= document.getElementById("docFisicosDIE");

let sampleFisicoDIE = 0;

const dataDIE2 = {
  labels: ["Agrado","Baraya","Isnos"],
  datasets: [

    {
      label: 'Estudiantes',
      data: [1974,2894,1335],
      backgroundColor: ['#008892', '#003F63', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
    }
  ]
};

const configDIE2 = {
    type: 'bar',
    data: dataDIE2,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Estudiantes acompañados por documentos fisicos en el municipio de Agrado por IE'
        }
      }
    },
  };

let docFisicosDIEVer= new Chart(docFisicosDIE,configDIE2);
sampleFisico2.innerHTML="Muestra "+ sampleFisicoDIE; 
docFisicosDIEVer.canvas.parentNode.style.height = '350px';
docFisicosDIEVer.canvas.parentNode.style.width = '700px';
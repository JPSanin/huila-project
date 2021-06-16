let docFisicosDN= document.getElementById("docFisicosDN");

let sampleFisicoDN = 0;

const dataDN2 = {
  labels: ["Preescolar","Primaria","Secundaria","Media"],
  datasets: [

    {
      label: 'Estudiantes',
      data: [1444,2352,2044,363],
      borderColor: 'blue',
      backgroundColor:  ['#008892', '#003F63', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
    }
  ]
};

const configDN2 = {
    type: 'bar',
    data: dataDN2,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Estudiantes acompañados por documentos fisicos en el departamento por nivel'
        }
      }
    },
  };

let docFisicosDNVer= new Chart(docFisicosDN,configDN2);
sampleFisico1.innerHTML="Muestra "+ sampleFisicoDN; 
docFisicosDNVer.canvas.parentNode.style.height = '350px';
docFisicosDNVer.canvas.parentNode.style.width = '700px';
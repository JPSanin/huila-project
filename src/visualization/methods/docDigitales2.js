let docDigitalesDIE= document.getElementById("docDigitalesDIE");

let sampleDigitalesDIE = 0;

const dataDIE1 = {
  labels: ["Agrado","Baraya","Isnos"],

  datasets: [
    {
      label: 'Estudiantes',
      data: [224,225,238],
      borderColor: 'blue',
      backgroundColor: ['#008892', '#003F63', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
    },
  ]
};

const configDIE1 = {
    type: 'bar',
    data: dataDIE1,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Estudiantes acompañados por documentos digitales en el municipio de Agrado por IE'
          
        }
      }
    },
  };

let docDigitalesDIEVer= new Chart(docDigitalesDIE,configDIE1);
sampleDigital2.innerHTML="Muestra "+ sampleDigitalesDIE; 
docDigitalesDIEVer.canvas.parentNode.style.height = '199px';
docDigitalesDIEVer.canvas.parentNode.style.width = '400px';


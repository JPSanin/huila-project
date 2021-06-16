let docDigitalesDN= document.getElementById("docDigitalesDN");

let sampleDigitalDN = 0;

const dataDN1 = {
  labels: ["Preescolar","Primaria","Secundaria","Media"],
  datasets: [
    {
      label: 'Estudiantes',
      data: [28,208,316,135],
      borderColor: 'blue',
      backgroundColor: ['#008892', '#003F63', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
    },
  ]
};

const configDN1 = {
    type: 'bar',
    data: dataDN1,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Estudiantes acompañados por documentos digitales  en el departamento por nivel'
        }
      }
    },
  };

let docDigitalesDNVer= new Chart(docDigitalesDN,configDN1);
sampleDigital1.innerHTML="Muestra "+ sampleDigitalDN; 
docDigitalesDNVer.canvas.parentNode.style.height = '350px';
docDigitalesDNVer.canvas.parentNode.style.width = '700px';


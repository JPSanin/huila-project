let metodosAlternosDIE= document.getElementById("metodosAlternosDIE");

let sampleMetodosAlternosDIE = 0;

const dataDIE4 = {
  labels: ["Visitas Domicilarias","Programas Radiales","Television","Telefonia"],
  datasets: [
    {
      label: 'Agrado',
      data: [16,0,0,110],
      borderColor: 'blue',
      backgroundColor:  ['#008892', '#003F63', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
    },
    {
      label: 'Baraya',
      data: [0,11,0,113],
      borderColor: 'blue',
      backgroundColor:  ['#008892', '#003F63', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
    },
    {
      label: 'Isnos',
      data: [14,0,0,309],
      borderColor: 'blue',
      backgroundColor:  ['#008892', '#003F63', '#FF6766','#FDC967', '#C5C789', '#83B8D7'],
    }
  ]
};

const configDIE4 = {
    type: 'bar',
    data: dataDIE4,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Estudiantes acompañados por metodos alternos en el municipio de Agrado por IE'
        }
      }
    },
  };

let metodosAlternosDIEVer= new Chart(metodosAlternosDIE,configDIE4);
sampleMetodosAlterno3.innerHTML="Muestra "+ sampleMetodosAlternosDIE; 
metodosAlternosDIEVer.canvas.parentNode.style.height = '350px';
metodosAlternosDIEVer.canvas.parentNode.style.width = '700px';
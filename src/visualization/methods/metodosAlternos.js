let metodosAlternosDIE= document.getElementById("metodosAlternosDIE");

let sampleMetodosAlternosDIE = 0;

const dataDIE4 = {
  labels: ["Visitas Domicilarias","Programas Radiales","Television","Telefonia"],
  datasets: [
    {
      label: 'Agrado',
      data: [16,0,0,110],
      borderColor: '#FF6766',
      backgroundColor:  '#FF6766',
    },
    {
      label: 'Baraya',
      data: [0,11,0,113],
      borderColor: '#008892',
      backgroundColor:  '#008892',
    },
    {
      label: 'Isnos',
      data: [14,0,0,309],
      borderColor: '#003F63',
      backgroundColor:  '#003F63', 
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
          text: 'Estudiantes acompañados por metodos alternos en el departamento por municipios'
        }
      }
    },
  };

let metodosAlternosDIEVer= new Chart(metodosAlternosDIE,configDIE4);
sampleMetodosAlterno3.innerHTML="Muestra "+ sampleMetodosAlternosDIE; 
metodosAlternosDIEVer.canvas.parentNode.style.height = '350px';
metodosAlternosDIEVer.canvas.parentNode.style.width = '700px';
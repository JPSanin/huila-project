let primariaCampus= document.getElementById("primariaCampus");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

/*let rawData2="";

$.ajax(dataBase).done(function(result){
rawData=result;
let data= Papa.parse(rawData,configData);
console.log(data.data);

let filteredData= [];
let showData2= [];

for(let index=0; index<data.data.length; index++){
  const element= data.data[index];
  if(element[3]== campus){
    filteredData.push(element);
  }
}
console.log(filteredData);

const totalStudents2= filteredData[0][21];

showData2.push(totalStudents2);*/

const dataPrimariaCampus = {
  labels: ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'],
  datasets: [
    {
      label: 'Número de estudiantes',
      data: [30,0,0,0,0], //showData2,
      borderColor: 'blue',
      backgroundColor: 'blue', //#459A7D
    },
  ]
};

const configPrimariaCampus = {
    type: 'bar',
    data: dataPrimariaCampus,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de estudiantes de primaria en alternancia en SEDE LA ODINA'
        }
      }
    },
  };

let primariaCampusGraph = new Chart(primariaCampus, configPrimariaCampus);

//});


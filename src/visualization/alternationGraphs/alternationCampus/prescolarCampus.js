let preescolarCampus= document.getElementById("preescolarCampus");

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});

/*let rawData="";

$.ajax(dataBase).done(function(result){
rawData=result;
let data= Papa.parse(rawData,configData);
console.log(data.data);

let filteredData= [];
let showData1= [];

for(let index=0; index<data.data.length; index++){
  const element= data.data[index];
  if(element[3]== campus){
    filteredData.push(element);
  }
}
console.log(filteredData);

const totalStudents= filteredData[0][20];

showData1.push(totalStudents);*/

const dataPreescolarCampus = {  //data
  labels: ['Preescolar'],
  datasets: [
    {
      label: 'Número de estudiantes',
      data: [40], //showData1
      borderColor: 'blue',
      backgroundColor: 'blue', //#459A7D
    },
  ]
};

const configPreescolarCampus = {
    type: 'bar',
    data: dataPreescolarCampus,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Número de estudiantes de preescolar en alternancia en SEDE LA ODINA'
        }
      }
    },
  };

let prescolarCampuseGraph = new Chart(preescolarCampus, configPreescolarCampus);
prescolarCampuseGraph.canvas.parentNode.style.height = '300px';
prescolarCampuseGraph.canvas.parentNode.style.width = '300px';

//});

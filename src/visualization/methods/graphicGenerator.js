//Selects for refreshing graphs
let municipalitySelectGenMethods = document.getElementById("municipalitySelect");
let institutionSelectGenMethods = document.getElementById("institutionSelect");
let campusSelectGenMethods = document.getElementById("campusSelect");


//Graph Canvases and Samples
let docFisicos1 = document.getElementById("docFisicos1");
let sampleFisicos1 = document.getElementById("sampleFisicos1");
let docsFisicosDisplay;

let docFisicosNivel = document.getElementById("docFisicosNivel");
let sampleFisicosNivel = document.getElementById("sampleFisicosNivel");
let docFisicosNivelDisplay;

let docDigitales = document.getElementById("docDigitales");
let sampledocDigitales = document.getElementById("sampledocDigitales");
let docDigitalesDisplay;

let docDigitalesNivel = document.getElementById("docDigitalesNivel");
let sampledocDigitalesNivel = document.getElementById("sampledocDigitalesNivel");
let docDigitalesNivelDisplay;

let otraEstrategia = document.getElementById("otraEstrategia");
let sampleOtraEstrategia = document.getElementById("sampleOtraEstrategia");
let otraEstrategiaDisplay;

let otraEstrategiaNivel = document.getElementById("otraEstrategiaNivel");
let sampleOtraEstrategiaNivel = document.getElementById("sampleOtraEstrategiaNivel");
let otraEstrategiaDisplayNivel;

let metodosAlternos = document.getElementById("metodosAlternos");
let sampleMetodosAlternos = document.getElementById("sampleMetodosAlternos");
let metodosAlternosDisplay;



window.onload = function () {
    initializeGraphs();
};

function initializeGraphs() {
    let rawData = "";

    $.ajax(dataBase).done(function (result) {
        rawData = result;
        let data = Papa.parse(rawData, configData);
        initialStateGraph1(data);
        initialStateGraph2(data);
        initialStateGraph3(data);
        initialStateGraph4(data);
        initialStateGraph5(data);
        initialStateGraph6(data);
        initialStateGraph7(data);
    });
}

function initialStateGraph1(info) {

    let showData = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {
            for (let j = 63; j < 67; j++) {
                showData[0] += parseInt(element[j]);
            }
        }
        if (element[0] == "BARAYA") {
            for (let j = 63; j < 67; j++) {
                showData[1] += parseInt(element[j]);
            }
        }
        if (element[0] == "ISNOS") {
            for (let j = 63; j < 67; j++) {
                showData[2] += parseInt(element[j]);
            }
        }
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Agrado", "Baraya", "Isnos"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos físicos en el departamento por municipios'
                }
            }
        },
    };

    docsFisicosDisplay = new Chart(docFisicos1, config);
    sampleFisicos1.innerHTML = "Total Muestra: " + sample;
    docsFisicosDisplay.canvas.parentNode.style.height = '350px';
    docsFisicosDisplay.canvas.parentNode.style.width = '700px';

}

function initialStateGraph2(info) {

    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];
        showData[0] += parseInt(element[63]);
        showData[1] += parseInt(element[64]);
        showData[2] += parseInt(element[65]);
        showData[3] += parseInt(element[66]);

    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos físicos en el departamento por nivel'
                }
            }
        },
    };

    docFisicosNivelDisplay = new Chart(docFisicosNivel, config);
    sampleFisicosNivel.innerHTML = "Total Muestra: " + sample;
    docFisicosNivelDisplay.canvas.parentNode.style.height = '350px';
    docFisicosNivelDisplay.canvas.parentNode.style.width = '700px';
}

function initialStateGraph3(info) {

    let showData = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {
            for (let j = 71; j < 75; j++) {
                showData[0] += parseInt(element[j]);
            }
        }
        if (element[0] == "BARAYA") {
            for (let j = 71; j < 75; j++) {
                showData[1] += parseInt(element[j]);
            }
        }
        if (element[0] == "ISNOS") {
            for (let j = 71; j < 75; j++) {
                showData[2] += parseInt(element[j]);
            }
        }
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Agrado", "Baraya", "Isnos"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos digitales en el departamento por municipios'
                }
            }
        },
    };

    docDigitalesDisplay = new Chart(docDigitales, config);
    sampledocDigitales.innerHTML = "Total Muestra: " + sample;
    docDigitalesDisplay.canvas.parentNode.style.height = '350px';
    docDigitalesDisplay.canvas.parentNode.style.width = '700px';

}

function initialStateGraph4(info) {

    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];
        showData[0] += parseInt(element[71]);
        showData[1] += parseInt(element[72]);
        showData[2] += parseInt(element[73]);
        showData[3] += parseInt(element[74]);

    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos digitales en el departamento por nivel'
                }
            }
        },
    };

    docDigitalesNivelDisplay = new Chart(docDigitalesNivel, config);
    sampledocDigitalesNivel.innerHTML = "Total Muestra: " + sample;
    docDigitalesNivelDisplay.canvas.parentNode.style.height = '350px';
    docDigitalesNivelDisplay.canvas.parentNode.style.width = '700px';
}

function initialStateGraph5(info) {

    let showData = [0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {
            for (let j = 75; j < 79; j++) {
                showData[0] += parseInt(element[j]);
            }
        }
        if (element[0] == "BARAYA") {
            for (let j = 75; j < 79; j++) {
                showData[1] += parseInt(element[j]);
            }
        }
        if (element[0] == "ISNOS") {
            for (let j = 75; j < 79; j++) {
                showData[2] += parseInt(element[j]);
            }
        }
    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Agrado", "Baraya", "Isnos"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por otras estrategias virtuales en el departamento por municipios'
                }
            }
        },
    };

    otraEstrategiaDisplay = new Chart(otraEstrategia, config);
    sampleOtraEstrategia.innerHTML = "Total Muestra: " + sample;
    otraEstrategiaDisplay.canvas.parentNode.style.height = '350px';
    otraEstrategiaDisplay.canvas.parentNode.style.width = '700px';

}

function initialStateGraph6(info) {

    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];
        showData[0] += parseInt(element[75]);
        showData[1] += parseInt(element[76]);
        showData[2] += parseInt(element[77]);
        showData[3] += parseInt(element[78]);

    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por otras estrategias virtuales en el departamento por nivel'
                }
            }
        },
    };

    otraEstrategiaDisplayNivel = new Chart(otraEstrategiaNivel, config);
    sampleOtraEstrategiaNivel.innerHTML = "Total Muestra: " + sample;
    otraEstrategiaDisplayNivel.canvas.parentNode.style.height = '350px';
    otraEstrategiaDisplayNivel.canvas.parentNode.style.width = '700px';
}

function initialStateGraph7(info) {

    let showDataAgrado = [0, 0, 0, 0];
    let showDataBaraya = [0, 0, 0, 0];
    let showDataIsnos = [0, 0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {

        const element = info.data[index];
        if (element[0] == "AGRADO") {
            for (let j = 67; j < 71; j++) {
                showDataAgrado[0] += parseInt(element[j])
            }
            for (let j = 79; j < 83; j++) {
                showDataAgrado[1] += parseInt(element[j])
            }
            for (let j = 83; j < 87; j++) {
                showDataAgrado[2] += parseInt(element[j])
            }
            for (let j = 87; j < 91; j++) {
                showDataAgrado[3] += parseInt(element[j])
            }
        }
        if (element[0] == "BARAYA") {
            for (let j = 67; j < 71; j++) {
                showDataBaraya[0] += parseInt(element[j])
            }
            for (let j = 79; j < 83; j++) {
                showDataBaraya[1] += parseInt(element[j])
            }
            for (let j = 83; j < 87; j++) {
                showDataBaraya[2] += parseInt(element[j])
            }
            for (let j = 87; j < 91; j++) {
                showDataBaraya[3] += parseInt(element[j])
            }
        }
        if (element[0] == "ISNOS") {
            for (let j = 67; j < 71; j++) {
                showDataIsnos[0] += parseInt(element[j])
            }
            for (let j = 79; j < 83; j++) {
                showDataIsnos[1] += parseInt(element[j])
            }
            for (let j = 83; j < 87; j++) {
                showDataIsnos[2] += parseInt(element[j])
            }
            for (let j = 87; j < 91; j++) {
                showDataIsnos[3] += parseInt(element[j])
            }

        }
    }


    let sample = showDataAgrado.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    sample += showDataBaraya.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    sample += showDataIsnos.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Visitas Domicilarias", "Programas Radiales", "Television", "Telefonia"],
        datasets: [{
                label: 'Agrado',
                data: showDataAgrado,
                borderColor: '#FF6766',
                backgroundColor: '#FF6766',
            },
            {
                label: 'Baraya',
                data: showDataBaraya,
                borderColor: '#008892',
                backgroundColor: '#008892',
            },
            {
                label: 'Isnos',
                data: showDataIsnos,
                borderColor: '#003F63',
                backgroundColor: '#003F63',
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
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

    metodosAlternosDisplay = new Chart(metodosAlternos, config);
    sampleMetodosAlternos.innerHTML = "Total Muestra: " + sample;
    metodosAlternosDisplay.canvas.parentNode.style.height = '350px';
    metodosAlternosDisplay.canvas.parentNode.style.width = '700px';
}

municipalitySelectGenMethods.addEventListener("change", function () {
    if (municipalitySelectGenMethods.value == "MUNICIPIO") {
        destroyGraphs();
        initializeGraphs();
        showGraphs();
    } else {
        destroyGraphs();
        createMunicipalityGraphs(municipalitySelectGenMethods.value);
    }
});

function createMunicipalityGraphs(municipality) {
    let rawData = "";

    $.ajax(dataBase).done(function (result) {
        rawData = result;
        let data = Papa.parse(rawData, configData);
        municipalityGraph1(data, municipality);
        municipalityGraph2(data, municipality);
        municipalityGraph3(data, municipality);
        municipalityGraph4(data, municipality);
        municipalityGraph5(data, municipality);
        municipalityGraph6(data,municipality);
       municipalityGraph7(data,municipality);
    });

}

function municipalityGraph1(info, municipality) {
    let filteredData = [];
    let labelNames = []
    let showData = [0];

    for (let index = 0; index < info.data.length; index++) {
        const element = info.data[index];
        if (element[0] == municipality) {
            filteredData.push(element);
        }
    }


    for (let index = 0; index < filteredData.length; index++) {
        if (index == 0) {
            labelNames.push(filteredData[index][1]);
        } else if (filteredData[index][1] != labelNames[labelNames.length - 1]) {
            labelNames.push(filteredData[index][1]);
        }
    }

    for (let index = 0; index < filteredData.length; index++) {
        const element = filteredData[index];
        if (element[1] != labelNames[showData.length - 1] && showData.length < labelNames.length) {
            showData.push(0);
        }
        if (element[1] == labelNames[showData.length - 1]) {
            for (let j = 63; j < 67; j++) {
                showData[showData.length - 1] += parseInt(element[j]);
            }
        }


    }



    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: labelNames,
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos físicos en el municipio por instituciones educativas'
                }
            }
        },
    };
    docsFisicosDisplay = new Chart(docFisicos1, config);
    sampleFisicos1.innerHTML = "Total Muestra: " + sample;
    docsFisicosDisplay.canvas.parentNode.style.height = '350px';
    docsFisicosDisplay.canvas.parentNode.style.width = '700px';
}

function municipalityGraph2(info, municipality) {

    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];

        if (element[0] == municipality) {
            showData[0] += parseInt(element[63]);
            showData[1] += parseInt(element[64]);
            showData[2] += parseInt(element[65]);
            showData[3] += parseInt(element[66]);
        }

    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos físicos en el municipio por nivel'
                }
            }
        },
    };

    docFisicosNivelDisplay = new Chart(docFisicosNivel, config);
    sampleFisicosNivel.innerHTML = "Total Muestra: " + sample;
    docFisicosNivelDisplay.canvas.parentNode.style.height = '350px';
    docFisicosNivelDisplay.canvas.parentNode.style.width = '700px';
}


function municipalityGraph3(info, municipality) {
    let filteredData = [];
    let labelNames = []
    let showData = [0];

    for (let index = 0; index < info.data.length; index++) {
        const element = info.data[index];
        if (element[0] == municipality) {
            filteredData.push(element);
        }
    }


    for (let index = 0; index < filteredData.length; index++) {
        if (index == 0) {
            labelNames.push(filteredData[index][1]);
        } else if (filteredData[index][1] != labelNames[labelNames.length - 1]) {
            labelNames.push(filteredData[index][1]);
        }
    }

    for (let index = 0; index < filteredData.length; index++) {
        const element = filteredData[index];
        if (element[1] != labelNames[showData.length - 1] && showData.length < labelNames.length) {
            showData.push(0);
        }
        if (element[1] == labelNames[showData.length - 1]) {
            for (let j = 71; j < 75; j++) {
                showData[showData.length - 1] += parseInt(element[j]);
            }
        }
    }




    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: labelNames,
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos digitales en el municipio por instituciones educativas'
                }
            }
        },
    };
    docDigitalesDisplay = new Chart(docDigitales, config);
    sampledocDigitales.innerHTML = "Total Muestra: " + sample;
    docDigitalesDisplay.canvas.parentNode.style.height = '350px';
    docDigitalesDisplay.canvas.parentNode.style.width = '700px';
}


function municipalityGraph4(info, municipality) {

    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];

        if (element[0] == municipality) {
            showData[0] += parseInt(element[71]);
            showData[1] += parseInt(element[72]);
            showData[2] += parseInt(element[73]);
            showData[3] += parseInt(element[74]);
        }

    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos digitales en el municipio por nivel'
                }
            }
        },
    };

    docDigitalesNivelDisplay = new Chart(docDigitalesNivel, config);
    sampledocDigitalesNivel.innerHTML = "Total Muestra: " + sample;
    docDigitalesNivelDisplay.canvas.parentNode.style.height = '350px';
    docDigitalesNivelDisplay.canvas.parentNode.style.width = '700px';
}

function municipalityGraph5(info, municipality) {
    let filteredData = [];
    let labelNames = []
    let showData = [0];

    for (let index = 0; index < info.data.length; index++) {
        const element = info.data[index];
        if (element[0] == municipality) {
            filteredData.push(element);
        }
    }


    for (let index = 0; index < filteredData.length; index++) {
        if (index == 0) {
            labelNames.push(filteredData[index][1]);
        } else if (filteredData[index][1] != labelNames[labelNames.length - 1]) {
            labelNames.push(filteredData[index][1]);
        }
    }

    for (let index = 0; index < filteredData.length; index++) {
        const element = filteredData[index];
        if (element[1] != labelNames[showData.length - 1] && showData.length < labelNames.length) {
            showData.push(0);
        }
        if (element[1] == labelNames[showData.length - 1]) {
            for (let j = 75; j < 79; j++) {
                showData[showData.length - 1] += parseInt(element[j]);
            }
        }
    }




    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: labelNames,
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por otras estrategias virtuales en el municipio por instituciones educativas'
                }
            }
        },
    };
    otraEstrategiaDisplay = new Chart(otraEstrategia, config);
    sampleOtraEstrategia.innerHTML = "Total Muestra: " + sample;
    otraEstrategiaDisplay.canvas.parentNode.style.height = '350px';
    otraEstrategiaDisplay.canvas.parentNode.style.width = '700px';
}

function municipalityGraph6(info, municipality) {

    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];

        if (element[0] == municipality) {
            showData[0] += parseInt(element[75]);
            showData[1] += parseInt(element[76]);
            showData[2] += parseInt(element[77]);
            showData[3] += parseInt(element[78]);
        }

    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por otras estrategias virtuales en el municipio por nivel'
                }
            }
        },
    };

    otraEstrategiaDisplayNivel = new Chart(otraEstrategiaNivel, config);
    sampleOtraEstrategiaNivel.innerHTML = "Total Muestra: " + sample;
    otraEstrategiaDisplayNivel.canvas.parentNode.style.height = '350px';
    otraEstrategiaDisplayNivel.canvas.parentNode.style.width = '700px';
}


function municipalityGraph7(info, municipality) {

    let filteredData=[];
    let labelNames=[];

    let showData1 = [0, 0, 0, 0];
    let showData2 = [0, 0, 0, 0];
    let showData3 = [0, 0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {
        const element = info.data[index];
        if (element[0] == municipality) {
            filteredData.push(element);
        }
    }


    for (let index = 0; index < filteredData.length; index++) {
        if (index == 0) {
            labelNames.push(filteredData[index][1]);
        } else if (filteredData[index][1] != labelNames[labelNames.length - 1]) {
            labelNames.push(filteredData[index][1]);
        }
    }

    for (let index = 0; index < filteredData.length; index++) {
        const element = filteredData[index];
        if (element[1] == labelNames[0]) {    
            for (let j = 67; j < 71; j++) {
                showData1[0] += parseInt(element[j])
            }
            for (let j = 79; j < 83; j++) {
                showData1[1] += parseInt(element[j])
            }
            for (let j = 83; j < 87; j++) {
                showData1[2] += parseInt(element[j])
            }
            for (let j = 87; j < 91; j++) {
                showData1[3] += parseInt(element[j])
            }
        }
        if (element[1] == labelNames[1]) {    
            for (let j = 67; j < 71; j++) {
                showData2[0] += parseInt(element[j])
            }
            for (let j = 79; j < 83; j++) {
                showData2[1] += parseInt(element[j])
            }
            for (let j = 83; j < 87; j++) {
                showData2[2] += parseInt(element[j])
            }
            for (let j = 87; j < 91; j++) {
                showData2[3] += parseInt(element[j])
            }
        }

        if (element[1] == labelNames[2]) {    
            for (let j = 67; j < 71; j++) {
                showData3[0] += parseInt(element[j])
            }
            for (let j = 79; j < 83; j++) {
                showData3[1] += parseInt(element[j])
            }
            for (let j = 83; j < 87; j++) {
                showData3[2] += parseInt(element[j])
            }
            for (let j = 87; j < 91; j++) {
                showData3[3] += parseInt(element[j])
            }
        }

    }


    let sample = showData1.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    sample += showData2.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    sample += showData3.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Visitas Domicilarias", "Programas Radiales", "Television", "Telefonia"],
        datasets: [{
                label: labelNames[0],
                data: showData1,
                borderColor: '#FF6766',
                backgroundColor: '#FF6766',
            },
            {
                label: labelNames[1],
                data: showData2,
                borderColor: '#008892',
                backgroundColor: '#008892',
            },
            {
                label: labelNames[2],
                data: showData3,
                borderColor: '#003F63',
                backgroundColor: '#003F63',
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por metodos alternos en el municipio por instituciones educativas'
                }
            }
        },
    };

    metodosAlternosDisplay = new Chart(metodosAlternos, config);
    sampleMetodosAlternos.innerHTML = "Total Muestra: " + sample;
    metodosAlternosDisplay.canvas.parentNode.style.height = '350px';
    metodosAlternosDisplay.canvas.parentNode.style.width = '700px';
}


institutionSelectGenMethods.addEventListener("change", function () {
    if (institutionSelectGenMethods.value == "INSTITUCIÓN") {
        destroyGraphs();
        createMunicipalityGraphs(municipalitySelectGenMethods.value);
        showGraphs();
    } else {
        destroyGraphs();
        createInstitutionGraphs(institutionSelectGenMethods.value);
    }
});

function createInstitutionGraphs(institution) {
    let rawData = "";

    $.ajax(dataBase).done(function (result) {
        rawData = result;
        let data = Papa.parse(rawData, configData);
        institutionGraph1(data, institution);
        institutionGraph2(data, institution);
        institutionGraph3(data, institution);
        institutionGraph4(data, institution);
        institutionGraph5(data, institution);
        institutionGraph6(data,institution);
        institutionGraph7(data,institution);
    });

}

function institutionGraph1(info, institution) {
    let filteredData = [];
    let labelNames = []
    let showData = [0];

    for (let index = 0; index < info.data.length; index++) {
        const element = info.data[index];
        if (element[1] == institution) {
            filteredData.push(element);
        }
    }


    for (let index = 0; index < filteredData.length; index++) {
        if (index == 0) {
            labelNames.push(filteredData[index][3]);
        } else if (filteredData[index][3] != labelNames[labelNames.length - 1]) {
            labelNames.push(filteredData[index][3]);
        }
    }


    for (let index = 0; index < filteredData.length; index++) {
        const element = filteredData[index];
        if (element[3] != labelNames[showData.length - 1] && showData.length < labelNames.length) {
            showData.push(0);
        }
        if (element[3] == labelNames[showData.length - 1]) {
            for (let j = 63; j < 67; j++) {
                showData[showData.length - 1] += parseInt(element[j]);
            }
        }


    }



    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: labelNames,
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos físicos en la instución educativas por sedes'
                }
            }
        },
    };
    docsFisicosDisplay = new Chart(docFisicos1, config);
    sampleFisicos1.innerHTML = "Total Muestra: " + sample;
    docsFisicosDisplay.canvas.parentNode.style.height = '350px';
    docsFisicosDisplay.canvas.parentNode.style.width = '700px';
}

function institutionGraph2(info, institution) {

    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];

        if (element[1] == institution) {
            showData[0] += parseInt(element[63]);
            showData[1] += parseInt(element[64]);
            showData[2] += parseInt(element[65]);
            showData[3] += parseInt(element[66]);
        }

    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos físicos en la institución educativa por nivel'
                }
            }
        },
    };

    docFisicosNivelDisplay = new Chart(docFisicosNivel, config);
    sampleFisicosNivel.innerHTML = "Total Muestra: " + sample;
    docFisicosNivelDisplay.canvas.parentNode.style.height = '350px';
    docFisicosNivelDisplay.canvas.parentNode.style.width = '700px';
}


function institutionGraph3(info, institution) {
    let filteredData = [];
    let labelNames = []
    let showData = [0];

    for (let index = 0; index < info.data.length; index++) {
        const element = info.data[index];
        if (element[1] == institution) {
            filteredData.push(element);
        }
    }
    for (let index = 0; index < filteredData.length; index++) {
        if (index == 0) {
            labelNames.push(filteredData[index][3]);
        } else if (filteredData[index][3] != labelNames[labelNames.length - 1]) {
            labelNames.push(filteredData[index][3]);
        }
    }

    for (let index = 0; index < filteredData.length; index++) {
        const element = filteredData[index];
        if (element[3] != labelNames[showData.length - 1] && showData.length < labelNames.length) {
            showData.push(0);
        }
        if (element[3] == labelNames[showData.length - 1]) {
            for (let j = 71; j < 75; j++) {
                showData[showData.length - 1] += parseInt(element[j]);
            }
        }
    }




    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: labelNames,
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos digitales en el municipio por instituciones educativas'
                }
            }
        },
    };
    docDigitalesDisplay = new Chart(docDigitales, config);
    sampledocDigitales.innerHTML = "Total Muestra: " + sample;
    docDigitalesDisplay.canvas.parentNode.style.height = '350px';
    docDigitalesDisplay.canvas.parentNode.style.width = '700px';
}


function institutionGraph4(info, institution) {

    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];

        if (element[1] == institution) {
            showData[0] += parseInt(element[71]);
            showData[1] += parseInt(element[72]);
            showData[2] += parseInt(element[73]);
            showData[3] += parseInt(element[74]);
        }

    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos digitales en la institución educativa por nivel'
                }
            }
        },
    };

    docDigitalesNivelDisplay = new Chart(docDigitalesNivel, config);
    sampledocDigitalesNivel.innerHTML = "Total Muestra: " + sample;
    docDigitalesNivelDisplay.canvas.parentNode.style.height = '350px';
    docDigitalesNivelDisplay.canvas.parentNode.style.width = '700px';
}

function institutionGraph5(info, institution) {
    let filteredData = [];
    let labelNames = []
    let showData = [0];

    for (let index = 0; index < info.data.length; index++) {
        const element = info.data[index];
        if (element[1] == institution) {
            filteredData.push(element);
        }
    }


    for (let index = 0; index < filteredData.length; index++) {
        if (index == 0) {
            labelNames.push(filteredData[index][3]);
        } else if (filteredData[index][3] != labelNames[labelNames.length - 1]) {
            labelNames.push(filteredData[index][3]);
        }
    }

    for (let index = 0; index < filteredData.length; index++) {
        const element = filteredData[index];
        if (element[3] != labelNames[showData.length - 1] && showData.length < labelNames.length) {
            showData.push(0);
        }
        if (element[3] == labelNames[showData.length - 1]) {
            for (let j = 75; j < 79; j++) {
                showData[showData.length - 1] += parseInt(element[j]);
            }
        }
    }




    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: labelNames,
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por otras estrategias virtuales en el municipio por instituciones educativas'
                }
            }
        },
    };
    otraEstrategiaDisplay = new Chart(otraEstrategia, config);
    sampleOtraEstrategia.innerHTML = "Total Muestra: " + sample;
    otraEstrategiaDisplay.canvas.parentNode.style.height = '350px';
    otraEstrategiaDisplay.canvas.parentNode.style.width = '700px';
}

function institutionGraph6(info, institution) {

    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];

        if (element[1] == institution) {
            showData[0] += parseInt(element[75]);
            showData[1] += parseInt(element[76]);
            showData[2] += parseInt(element[77]);
            showData[3] += parseInt(element[78]);
        }

    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por otras estrategias virtuales en la institución educativa por nivel'
                }
            }
        },
    };

    otraEstrategiaDisplayNivel = new Chart(otraEstrategiaNivel, config);
    sampleOtraEstrategiaNivel.innerHTML = "Total Muestra: " + sample;
    otraEstrategiaDisplayNivel.canvas.parentNode.style.height = '350px';
    otraEstrategiaDisplayNivel.canvas.parentNode.style.width = '700px';
}


function institutionGraph7(info, institution) {
    let data1;
    let config1;
    let filteredData=[];
    let labelNames=[];

    let showData1 = [0, 0, 0, 0];
    let showData2 = [0, 0, 0, 0];
    let showData3 = [0, 0, 0, 0];
    let showData4 = [0, 0, 0, 0];

    for (let index = 0; index < info.data.length; index++) {
        const element = info.data[index];
        if (element[1] == institution) {
            filteredData.push(element);
        }
    }


    for (let index = 0; index < filteredData.length; index++) {
        if (index == 0) {
            labelNames.push(filteredData[index][3]);
        } else if (filteredData[index][3] != labelNames[labelNames.length - 1]) {
            labelNames.push(filteredData[index][3]);
        }
    }

    for (let index = 0; index < filteredData.length; index++) {
        const element = filteredData[index];
        if (element[3] == labelNames[0]) {    
            for (let j = 67; j < 71; j++) {
                showData1[0] += parseInt(element[j])
            }
            for (let j = 79; j < 83; j++) {
                showData1[1] += parseInt(element[j])
            }
            for (let j = 83; j < 87; j++) {
                showData1[2] += parseInt(element[j])
            }
            for (let j = 87; j < 91; j++) {
                showData1[3] += parseInt(element[j])
            }
        }
        
        if (element[3] == labelNames[1]) {    
            for (let j = 67; j < 71; j++) {
                showData2[0] += parseInt(element[j])
            }
            for (let j = 79; j < 83; j++) {
                showData2[1] += parseInt(element[j])
            }
            for (let j = 83; j < 87; j++) {
                showData2[2] += parseInt(element[j])
            }
            for (let j = 87; j < 91; j++) {
                showData2[3] += parseInt(element[j])
            }
        }

        if (element[3] == labelNames[2]) {    
            for (let j = 67; j < 71; j++) {
                showData3[0] += parseInt(element[j])
            }
            for (let j = 79; j < 83; j++) {
                showData3[1] += parseInt(element[j])
            }
            for (let j = 83; j < 87; j++) {
                showData3[2] += parseInt(element[j])
            }
            for (let j = 87; j < 91; j++) {
                showData3[3] += parseInt(element[j])
            }
        }

        if (labelNames.length==4 && element[3] == labelNames[3]) {    
            for (let j = 67; j < 71; j++) {
                showData4[0] += parseInt(element[j])
            }
            for (let j = 79; j < 83; j++) {
                showData4[1] += parseInt(element[j])
            }
            for (let j = 83; j < 87; j++) {
                showData4[2] += parseInt(element[j])
            }
            for (let j = 87; j < 91; j++) {
                showData4[3] += parseInt(element[j])
            }
        }

    }


    let sample = showData1.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    sample += showData2.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    sample += showData3.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    if (labelNames.length==4){
        sample += showData4.reduce(function (a, b) {
            return parseInt(a) + parseInt(b);
        }, 0);

        data1 = {
            labels: ["Visitas Domicilarias", "Programas Radiales", "Television", "Telefonia"],
            datasets: [{
                    label: labelNames[0],
                    data: showData1,
                    borderColor: '#FF6766',
                    backgroundColor: '#FF6766',
                },
                {
                    label: labelNames[1],
                    data: showData2,
                    borderColor: '#008892',
                    backgroundColor: '#008892',
                },
                {
                    label: labelNames[2],
                    data: showData3,
                    borderColor: '#003F63',
                    backgroundColor: '#003F63',
                },
                {
                    label: labelNames[3],
                    data: showData4,
                    borderColor: '#FDC967',
                    backgroundColor: '#FDC967',
                },
            ]
        };
    
        config1 = {
            type: 'bar',
            data: data1,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Estudiantes acompañados por metodos alternos en la institución educativa por sedes'
                    }
                }
            },
        };

    }else{
         data1 = {
            labels: ["Visitas Domicilarias", "Programas Radiales", "Television", "Telefonia"],
            datasets: [{
                    label: labelNames[0],
                    data: showData1,
                    borderColor: '#FF6766',
                    backgroundColor: '#FF6766',
                },
                {
                    label: labelNames[1],
                    data: showData2,
                    borderColor: '#008892',
                    backgroundColor: '#008892',
                },
                {
                    label: labelNames[2],
                    data: showData3,
                    borderColor: '#003F63',
                    backgroundColor: '#003F63',
                }
            ]
        };
    
        config1 = {
            type: 'bar',
            data: data1,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Estudiantes acompañados por metodos alternos en la institución educativa por sedes'
                    }
                }
            },
        };
    }

   

    metodosAlternosDisplay = new Chart(metodosAlternos, config1);
    sampleMetodosAlternos.innerHTML = "Total Muestra: " + sample;
    metodosAlternosDisplay.canvas.parentNode.style.height = '350px';
    metodosAlternosDisplay.canvas.parentNode.style.width = '700px';
}



campusSelectGenMethods.addEventListener("change", function () {
    if (campusSelectGenMethods.value == "SEDE") {
        destroyGraphs();
        createInstitutionGraphs(institutionSelectGenMethods.value);
        showGraphs();
    } else {
        destroyGraphs();
        hideGraphs();
        createCampusGraphs(campusSelectGenMethods.value);
    }
});

function createCampusGraphs(campus) {
    let rawData = "";

    $.ajax(dataBase).done(function (result) {
        rawData = result;
        let data = Papa.parse(rawData, configData);
         campusGraph1(data, campus);
        campusGraph2(data, campus);
        campusGraph3(data, campus);
        campusGraph4(data, campus);
    });

}

function campusGraph1(info, campus) {

    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];

        if (element[3] == campus) {
            showData[0] += parseInt(element[63]);
            showData[1] += parseInt(element[64]);
            showData[2] += parseInt(element[65]);
            showData[3] += parseInt(element[66]);
        }

    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos físicos en la sede por nivel'
                }
            }
        },
    };

    docFisicosNivelDisplay = new Chart(docFisicosNivel, config);
    sampleFisicosNivel.innerHTML = "Total Muestra: " + sample;
    docFisicosNivelDisplay.canvas.parentNode.style.height = '350px';
    docFisicosNivelDisplay.canvas.parentNode.style.width = '700px';
}

function campusGraph2(info, campus) {
    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];

        if (element[3] == campus) {
            showData[0] += parseInt(element[71]);
            showData[1] += parseInt(element[72]);
            showData[2] += parseInt(element[73]);
            showData[3] += parseInt(element[74]);
        }

    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por documentos digitales en la sede por nivel'
                }
            }
        },
    };

    docDigitalesNivelDisplay = new Chart(docDigitalesNivel, config);
    sampledocDigitalesNivel.innerHTML = "Total Muestra: " + sample;
    docDigitalesNivelDisplay.canvas.parentNode.style.height = '350px';
    docDigitalesNivelDisplay.canvas.parentNode.style.width = '700px';
}


function campusGraph3(info, campus) {
   
    let showData = [0, 0, 0, 0];

    for (let index = 2; index < 36; index++) {

        const element = info.data[index];

        if (element[3] == campus) {
            showData[0] += parseInt(element[75]);
            showData[1] += parseInt(element[76]);
            showData[2] += parseInt(element[77]);
            showData[3] += parseInt(element[78]);
        }

    }

    let sample = showData.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    const data = {
        labels: ["Preescolar", "Primaria", "Secundaria", "Media"],
        datasets: [

            {
                label: 'Estudiantes',
                data: showData,
                borderColor: 'blue',
                backgroundColor: colors,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Estudiantes acompañados por otras estrategias virtuales en la sede por nivel'
                }
            }
        },
    };

    otraEstrategiaDisplayNivel = new Chart(otraEstrategiaNivel, config);
    sampleOtraEstrategiaNivel.innerHTML = "Total Muestra: " + sample;
    otraEstrategiaDisplayNivel.canvas.parentNode.style.height = '350px';
    otraEstrategiaDisplayNivel.canvas.parentNode.style.width = '700px';
}


function campusGraph4(info, campus) {

    
    let showData1 = [];
    let showData2 = [];
    let showData3 = [];
    let showData4 = [];

    for (let index = 0; index < info.data.length; index++) {
        const element = info.data[index];
        if (element[3] == campus) {
        showData1.push(element[67]);
        showData2.push(element[68]);
        showData3.push(element[69]);
        showData4.push(element[70]);

        showData1.push(element[79]);
        showData2.push(element[80]);
        showData3.push(element[81]);
        showData4.push(element[82]);

        showData1.push(element[83]);
        showData2.push(element[84]);
        showData3.push(element[85]);
        showData4.push(element[86]);

        showData1.push(element[87]);
        showData2.push(element[88]);
        showData3.push(element[89]);
        showData4.push(element[90]);
        }
    }



    let sample = showData1.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    sample += showData2.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    sample += showData3.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

   
    sample += showData4.reduce(function (a, b) {
            return parseInt(a) + parseInt(b);
    }, 0);

       const data = {
            labels: ["Visitas Domicilarias", "Programas Radiales", "Television", "Telefonia"],
            datasets: [{
                    label: 'Prescolar',
                    data: showData1,
                    borderColor: '#FF6766',
                    backgroundColor: '#FF6766',
                },
                {
                    label: 'Primaria',
                    data: showData2,
                    borderColor: '#008892',
                    backgroundColor: '#008892',
                },
                {
                    label: 'Secundaria',
                    data: showData3,
                    borderColor: '#003F63',
                    backgroundColor: '#003F63',
                },
                {
                    label: 'Media',
                    data: showData4,
                    borderColor: '#FDC967',
                    backgroundColor: '#FDC967',
                },
            ]
        };
    
        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Estudiantes acompañados por metodos alternos en la sede por niveles'
                    }
                }
            },
        };

   

   

    metodosAlternosDisplay = new Chart(metodosAlternos, config);
    sampleMetodosAlternos.innerHTML = "Total Muestra: " + sample;
    metodosAlternosDisplay.canvas.parentNode.style.height = '350px';
    metodosAlternosDisplay.canvas.parentNode.style.width = '700px';
}



function hideGraphs(){

document.getElementById("container__docFisicos1").style.display= "none";
document.getElementById("container__docDigitales").style.display= "none";
document.getElementById("container__otraEstrategia").style.display= "none";

}

function showGraphs(){
document.getElementById("container__docFisicos1").style.display= "flex";
document.getElementById("container__docDigitales").style.display= "flex";
document.getElementById("container__otraEstrategia").style.display= "flex";
}

function destroyGraphs() {
    docsFisicosDisplay.destroy();
    docFisicosNivelDisplay.destroy();
    docDigitalesDisplay.destroy();
    docDigitalesNivelDisplay.destroy();
    otraEstrategiaDisplay.destroy();
    otraEstrategiaDisplayNivel.destroy();
    metodosAlternosDisplay.destroy();
}

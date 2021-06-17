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
                    text: 'Estudiantes acompañados por documentos físicos en el departamento por municipios'
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
                    text: 'Estudiantes acompañados por documentos físicos en el departamento por nivel'
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
                    text: 'Estudiantes acompañados por documentos físicos en el departamento por municipios'
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
                    text: 'Estudiantes acompañados por documentos físicos en el departamento por nivel'
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

municipalitySelectGenMethods.addEventListener("click", function () {

});
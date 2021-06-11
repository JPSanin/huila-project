//JS to alter selects in dashboard

let municipalitySelect = document.getElementById("municipalitySelect");
let institutionSelect = document.getElementById("institutionSelect");
let campusSelect = document.getElementById("campusSelect");

municipalitySelect.addEventListener("click", function () {

    switch (municipalitySelect.value) {

        case "AGRADO":
            removeInstitutionOptions();
            createAgradoOptions();
            institutionSelect.disabled = false;
            break;

        case "BARAYA":
            removeInstitutionOptions();
            createBarayaOptions();
            institutionSelect.disabled = false;
            break;

        case "ISNOS":
            removeInstitutionOptions();
            createIsnosOptions();
            institutionSelect.disabled = false;
            break;

        case "MUNICIPIO":
            removeInstitutionOptions();
            removeCampusOptions();
            institutionSelect.disabled = true;
            campusSelect.disabled = true;
            break;
    }

});

function createAgradoOptions() {
    let montesitos = document.createElement("option");
    montesitos.text = "IE MONTESITOS";
    montesitos.value = "IE MONTESITOS";
    montesitos.id = "ieMontesitosOption";

    let carmen = document.createElement("option");
    carmen.text = "IE EL CARMEN";
    carmen.value = "IE EL CARMEN";
    carmen.id = "ieElCarmenOption";

    let merced = document.createElement("option");
    merced.text = "IE LA MERCED";
    merced.value = "IE LA MERCED";
    merced.id = "ieLaMercedOption";


    institutionSelect.add(montesitos);
    institutionSelect.add(carmen);
    institutionSelect.add(merced);
}

function createBarayaOptions() {
    let joaquin = document.createElement("option");
    joaquin.text = "IE JOAQUÍN GARCÍA BORRERO";
    joaquin.value = "IE JOAQUIN GARCIA BORRERO";
    joaquin.id = "ieJoaquinGarciaBorreroOption";

    let union = document.createElement("option");
    union.text = "CE LA UNIÓN";
    union.value = "CE LA UNIÓN";
    union.id = "ceLaUnionOption";

    let troja = document.createElement("option");
    troja.text = "IE LA TROJA";
    troja.value = "IE LA TROJA";
    troja.id = "ieLaTrojaOption";


    institutionSelect.add(joaquin);
    institutionSelect.add(union);
    institutionSelect.add(troja);
}

function createIsnosOptions() {
    let bordones = document.createElement("option");
    bordones.text = "IE BORDONES";
    bordones.value = "IE BORDONES";
    bordones.id = "ieBordonesOption";

    let belen = document.createElement("option");
    belen.text = "IE BELEN";
    belen.value = "IE BELEN";
    belen.id = "ieBelenOption";

    let mondeyal = document.createElement("option");
    mondeyal.text = "IE MONDEYAL";
    mondeyal.value = "IE MONDEYAL";
    mondeyal.id = "ieMondeyalOption";


    institutionSelect.add(bordones);
    institutionSelect.add(belen);
    institutionSelect.add(mondeyal);
}

function removeInstitutionOptions() {
    for (let i = institutionSelect.length - 1; i >= 1; i--) {
        institutionSelect.remove(i);
    }
}

institutionSelect.addEventListener("click", function () {

    switch (institutionSelect.value) {

        case "IE MONTESITOS":
            removeCampusOptions();
            createMontesitosOptions();
            campusSelect.disabled = false;
            break;

        case "IE EL CARMEN":
            removeCampusOptions();
            createCarmenOptions();
            campusSelect.disabled = false;
            break;

        case "IE LA MERCED":
            removeCampusOptions();
            createMercedOptions();
            campusSelect.disabled = false;
            break;

        case "IE JOAQUIN GARCIA BORRERO":
            removeCampusOptions();
            createJoaquinOptions();
            campusSelect.disabled = false;
            break;

        case "LA TROJA":
            removeCampusOptions();
            createTrojaOptions();
            campusSelect.disabled = false;
            break;

        case "IE BORDONES":
            removeCampusOptions();
            createBordonesOptions();
            campusSelect.disabled = false;
            break;

        case "IE BELEN":
            removeCampusOptions();
            createBelenOptions();
            campusSelect.disabled = false;
            break;

        case "IE MONDEYAL":
            removeCampusOptions();
            createMondeyalOptions();
            campusSelect.disabled = false;
            break;

        case "INSTITUCIÓN":
            campusSelect.disabled = true;
            break;
    }

});

function createMontesitosOptions() {
    let odina = document.createElement("option");
    odina.text = "LA ODINA";
    odina.value = "LA ODINA";
    odina.id = "laOdinaOption";

    let sabaneta = document.createElement("option");
    sabaneta.text = "SABANETA";
    sabaneta.value = "SABANETA";
    sabaneta.id = "sabanetaOption";

    let orquideas = document.createElement("option");
    orquideas.text = "LAS ORQUÍDEAS";
    orquideas.value = "LAS ORQUÍDEAS";
    orquideas.id = "lasOrquideasOption";

    let sanAntonio = document.createElement("option");
    sanAntonio.text = "SAN ANTONIO";
    sanAntonio.value = "SAN ANTONIO";
    sanAntonio.id = "sanAntonioOption";


    campusSelect.add(odina);
    campusSelect.add(sabaneta);
    campusSelect.add(orquideas);
    campusSelect.add(sanAntonio);
}

function createCarmenOptions() {
    let maria = document.createElement("option");
    maria.text = "LA MARIA";
    maria.value = "LA MARIA";
    maria.id = "laMariaOption";

    let horizonte = document.createElement("option");
    horizonte.text = "EL HORIZONTE";
    horizonte.value = "EL HORIZONTE";
    horizonte.id = "elHorizonteOption";

    let pedernal = document.createElement("option");
    pedernal.text = "EL PEDERNAL";
    pedernal.value = "EL PEDERNAL";
    pedernal.id = "elPedernalOption";

    let astillero = document.createElement("option");
    astillero.text = "EL ASTILLERO";
    astillero.value = "EL ASTILLERO";
    astillero.id = "elAstilleroOption";


    campusSelect.add(maria);
    campusSelect.add(horizonte);
    campusSelect.add(pedernal);
    campusSelect.add(astillero);
}

function createMercedOptions() {

    let merced = document.createElement("option");
    merced.text = "IE LA MERCED";
    merced.value = "IE LA MERCED";
    merced.id = "ieLaMercedOption";

    let honda = document.createElement("option");
    honda.text = "LA HONDA";
    honda.value = "LA HONDA";
    honda.id = "laHondaOption";

    let rosario = document.createElement("option");
    rosario.text = "ROSARIO";
    rosario.value = "ROSARIO";
    rosario.id = "rosarioOption";


    campusSelect.add(merced);
    campusSelect.add(honda);
    campusSelect.add(rosario);
}

function createJoaquinOptions() {

    let pino = document.createElement("option");
    pino.text = "EL PINO";
    pino.value = "EL PINO";
    pino.id = "elPinoOption";

    let cerroNegro = document.createElement("option");
    cerroNegro.text = "CERRO NEGRO";
    cerroNegro.value = "CERRO NEGRO";
    cerroNegro.id = "cerroNegroOption";

    let elCañon = document.createElement("option");
    elCañon.text = "EL CAÑON";
    elCañon.value = "EL CAÑON";
    elCañon.id = "elCañonOption";


    campusSelect.add(pino);
    campusSelect.add(cerroNegro);
    campusSelect.add(elCañon);
}

function createUnionOptions() {
    let laSiria = document.createElement("option");
    laSiria.text = "LA SIRIA";
    laSiria.value = "LA SIRIA";
    laSiria.id = "laSiriaOption";

    let filoSeco = document.createElement("option");
    filoSeco.text = "FILO SECO";
    filoSeco.value = "FILO SECO";
    filoSeco.id = "filoSecoOption";

    let bejucal = document.createElement("option");
    bejucal.text = "BEJUCAL";
    bejucal.value = "BEJUCAL";
    bejucal.id = "bejucalOption";

    let perlas = document.createElement("option");
    perlas.text = "LAS PERLAS";
    perlas.value = "LAS PERLAS";
    perlas.id = "lasPerlasOption";


    campusSelect.add(laSiria);
    campusSelect.add(filoSeco);
    campusSelect.add(bejucal);
    campusSelect.add(perlas);
}

function createTrojaOptions() {
    let laTroja = document.createElement("option");
    laTroja.text = "LA TROJA";
    laTroja.value = "LA TROJA";
    laTroja.id = "laTrojaOption";

    let manzanares = document.createElement("option");
    manzanares.text = "MANZANARES";
    manzanares.value = "MANZANARES";
    manzanares.id = "manzanaresOption";

    let altamira = document.createElement("option");
    altamira.text = "ALTAMIRA";
    altamira.value = "ALTAMIRA";
    altamira.id = "altamiraOption";

    let miramar = document.createElement("option");
    miramar.text = "MIRAMAR";
    miramar.value = "MIRAMAR";
    miramar.id = "miramarOption";


    campusSelect.add(laTroja);
    campusSelect.add(manzanares);
    campusSelect.add(altamira);
    campusSelect.add(miramar);
}

function createBordonesOptions() {
    let bajoBrisas = document.createElement("option");
    bajoBrisas.text = "BAJO BRISAS";
    bajoBrisas.value ="BAJO BRISAS";
    bajoBrisas.id = "bajoBrisasOption";

    let lasDelicias = document.createElement("option");
    lasDelicias.text = "LAS DELICIAS";
    lasDelicias.value = "LAS DELICIAS";
    lasDelicias.id = "lasDeliciasOption";

    let jerusalen = document.createElement("option");
    jerusalen.text = "JERUSALEN";
    jerusalen.value = "JERUSALEN";
    jerusalen.id = "jerusalenOption";

    let laRivera = document.createElement("option");
    laRivera.text = "LA RIVERA";
    laRivera.value = "LA RIVERA";
    laRivera.id = "laRiveraOption";


    campusSelect.add(bajoBrisas);
    campusSelect.add(lasDelicias);
    campusSelect.add(jerusalen);
    campusSelect.add(laRivera);
}

function createBelenOptions() {
    let campoAlegre = document.createElement("option");
    campoAlegre.text = "CAMPO ALEGRE";
    campoAlegre.value ="CAMPO ALEGRE";
    campoAlegre.id = "campoAlegreOption";

    let marqueza = document.createElement("option");
    marqueza.text = "MARQUEZA";
    marqueza.value = "MARQUEZA";
    marqueza.id = "marquezaOption";

    let bellaVista = document.createElement("option");
    bellaVista.text = "BELLA VISTA"
    bellaVista.value = "BELLA VISTA"
    bellaVista.id = "bellaVistaOption";

    let sanLorenzo = document.createElement("option");
    sanLorenzo.text = "SAN LORENZO";
    sanLorenzo.value = "SAN LORENZO";
    sanLorenzo.id = "sanLorenzoOption";


    campusSelect.add(campoAlegre);
    campusSelect.add(marqueza);
    campusSelect.add(bellaVista);
    campusSelect.add(sanLorenzo);
}

function createMondeyalOptions() {
    let mondeyal = document.createElement("option");
    mondeyal.text = "ALTO MONDEYAL";
    mondeyal.value ="ALTO MONDEYAL";
    mondeyal.id = "altoMondeyalOption";

    let bajoMagdalena = document.createElement("option");
    bajoMagdalena.text = "BAJO MAGDALENA";
    bajoMagdalena.value = "BAJO MAGDALENA";
    bajoMagdalena.id = "bajoMagdalenaOption";

    let cambulos = document.createElement("option");
    cambulos.text = "CÁMBULOS"
    cambulos.value = "CÁMBULOS"
    cambulos.id = "cambulosOption";

    let cienagaChiquita = document.createElement("option");
    cienagaChiquita.text = "CIÉNAGA CHIQUITA";
    cienagaChiquita.value = "CIÉNAGA CHIQUITA";
    cienagaChiquita.id = "cienagaChiquitaOption";


    campusSelect.add(mondeyal);
    campusSelect.add(bajoMagdalena);
    campusSelect.add(cambulos);
    campusSelect.add(cienagaChiquita);
}


function removeCampusOptions() {
    for (let i = campusSelect.length - 1; i >= 1; i--) {
        campusSelect.remove(i);
    }
}
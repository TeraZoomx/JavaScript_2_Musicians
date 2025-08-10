// app.js

//selector Pentatonica
document.getElementById("modoP").onclick = SS1;
function SS1() {
    var Nota2 = document.getElementById("modoP").textContent
    switch (Nota2) {
        case 'Pentatonica':
            modoP.textContent = "Completa"; break;
        case 'Completa':
            modoP.textContent = "Pentatonica"; break;
    }
}

//selector de escalas
document.getElementById("TonoR").onclick = SS;
function SS() {
    var Nota = document.getElementById("TonoR").textContent
    switch (Nota) {
        case 'C':
            TonoR.textContent = "D";
            EscalaT.textContent = "- Modo Dorian (Menor)";
            break;
        case 'D':
            TonoR.textContent = "E";
            EscalaT.textContent = "- Modo Phrygian (Menor)";
            break;
        case 'E':
            TonoR.textContent = "F";
            EscalaT.textContent = "- Modo Lydian (Mayor)";
            break;
        case 'F':
            TonoR.textContent = "G";
            EscalaT.textContent = "- Modo Mixolidian (Mayor)";
            break;
        case 'G':
            TonoR.textContent = "A";
            EscalaT.textContent = "- Modo Eolian (Menor natural)";
            break;
        case 'A':
            TonoR.textContent = "B";
            EscalaT.textContent = "- Modo Locrian (Menor)";
            break;
        case 'B':
            TonoR.textContent = "C";
            EscalaT.textContent = "- Modo Ionian (Mayor)";
            break;
    }
}

//Base de datos
var keynotas = [[5, 10, 3, 8, 12, 5], [6, 11, 4, 9, 1, 6], [7, 12, 5, 10, 2, 7], [8, 1, 6, 11, 3, 8], [9, 2, 7, 12, 4, 9], [10, 3, 8, 1, 5, 10], [11, 4, 9, 2, 6, 11], [12, 5, 10, 3, 7, 12], [1, 6, 11, 4, 8, 1], [2, 7, 12, 5, 9, 2], [3, 8, 1, 6, 10, 3], [4, 9, 2, 7, 11, 4], [5, 10, 3, 8, 12, 5], [6, 11, 4, 9, 1, 6], [7, 12, 5, 10, 2, 7], [8, 1, 6, 11, 3, 8], [9, 2, 7, 12, 4, 9], [10, 3, 8, 1, 5, 10], [11, 4, 9, 2, 6, 11], [12, 5, 10, 3, 7, 12], [1, 6, 11, 4, 8, 1], [2, 7, 12, 5, 9, 2], [3, 8, 1, 6, 10, 3], [4, 9, 2, 7, 11, 4]];
var idnotas = ["--", "C", ".c", "D", ".d", "E", "F", ".f", "G", ".g", "A", ".a", "B"];
var fretID = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];

// Base de datos de escalas musicales
var IonEsc = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];
var DorEsc = [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0];
var PhrEsc = [1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0];
var LydEsc = [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1];
var MixEsc = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0];
var EolEsc = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
var LocEsc = [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0];

//Activador del Procedimiento
document.getElementById("mostrarP").onclick = SS3;
function SS3() {
    // Es mejor manipular el DOM que reescribir toda la página
    var Nota = document.getElementById("EscalaT").textContent;
    var P = document.getElementById("modoP").textContent;

    let outputHTML = "";
    
    for (var n = 0; n < 24; n++) {
        //grados del 1 al 12
        var xx1 = keynotas[n][0];
        var xx2 = keynotas[n][1];
        var xx3 = keynotas[n][2];
        var xx4 = keynotas[n][3];
        var xx5 = keynotas[n][4];
        var xx6 = keynotas[n][5];

        //Correccion por escala
        var x1, x2, x3, x4, x5, x6;
        if (Nota == "- Modo Ionian (Mayor)") {
            x1 = xx1 * IonEsc[xx1 - 1];
            x2 = xx2 * IonEsc[xx2 - 1];
            x3 = xx3 * IonEsc[xx3 - 1];
            x4 = xx4 * IonEsc[xx4 - 1];
            x5 = xx5 * IonEsc[xx5 - 1];
            x6 = xx6 * IonEsc[xx6 - 1];
        }
        if (Nota == "- Modo Dorian (Menor)") {
            x1 = xx1 * DorEsc[xx1 - 1];
            x2 = xx2 * DorEsc[xx2 - 1];
            x3 = xx3 * DorEsc[xx3 - 1];
            x4 = xx4 * DorEsc[xx4 - 1];
            x5 = xx5 * DorEsc[xx5 - 1];
            x6 = xx6 * DorEsc[xx6 - 1];
        }
        if (Nota == "- Modo Phrygian (Menor)") {
            x1 = xx1 * PhrEsc[xx1 - 1];
            x2 = xx2 * PhrEsc[xx2 - 1];
            x3 = xx3 * PhrEsc[xx3 - 1];
            x4 = xx4 * PhrEsc[xx4 - 1];
            x5 = xx5 * PhrEsc[xx5 - 1];
            x6 = xx6 * PhrEsc[xx6 - 1];
        }
        if (Nota == "- Modo Lydian (Mayor)") {
            x1 = xx1 * LydEsc[xx1 - 1];
            x2 = xx2 * LydEsc[xx2 - 1];
            x3 = xx3 * LydEsc[xx3 - 1];
            x4 = xx4 * LydEsc[xx4 - 1];
            x5 = xx5 * LydEsc[xx5 - 1];
            x6 = xx6 * LydEsc[xx6 - 1];
        }
        if (Nota == "- Modo Mixolidian (Mayor)") {
            x1 = xx1 * MixEsc[xx1 - 1];
            x2 = xx2 * MixEsc[xx2 - 1];
            x3 = xx3 * MixEsc[xx3 - 1];
            x4 = xx4 * MixEsc[xx4 - 1];
            x5 = xx5 * MixEsc[xx5 - 1];
            x6 = xx6 * MixEsc[xx6 - 1];
        }
        if (Nota == "- Modo Eolian (Menor natural)") {
            x1 = xx1 * EolEsc[xx1 - 1];
            x2 = xx2 * EolEsc[xx2 - 1];
            x3 = xx3 * EolEsc[xx3 - 1];
            x4 = xx4 * EolEsc[xx4 - 1];
            x5 = xx5 * EolEsc[xx5 - 1];
            x6 = xx6 * EolEsc[xx6 - 1];
        }
        if (Nota == "- Modo Locrian (Menor)") {
            x1 = xx1 * LocEsc[xx1 - 1];
            x2 = xx2 * LocEsc[xx2 - 1];
            x3 = xx3 * LocEsc[xx3 - 1];
            x4 = xx4 * LocEsc[xx4 - 1];
            x5 = xx5 * LocEsc[xx5 - 1];
            x6 = xx6 * LocEsc[xx6 - 1];
        }

        //filtro de escalas
        // eliminar las notas que no existen en la escala utilizada
        //identificador de notas del 0 al 11
        var cd1 = idnotas[x1];
        var cd2 = idnotas[x2];
        var cd3 = idnotas[x3];
        var cd4 = idnotas[x4];
        var cd5 = idnotas[x5];
        var cd6 = idnotas[x6];

        //filtro de pentatonica
        if (P == "Pentatonica") {
            if (x1 == 6 || x1 == 12) { cd1 = "--" };
            if (x2 == 6 || x2 == 12) { cd2 = "--" };
            if (x3 == 6 || x3 == 12) { cd3 = "--" };
            if (x4 == 6 || x4 == 12) { cd4 = "--" };
            if (x5 == 6 || x5 == 12) { cd5 = "--" };
            if (x6 == 6 || x6 == 12) { cd6 = "--" };
        }

        //numero de fret
        var nfret = fretID[n];

        //salida de datos, usando padStart para una alineación perfecta
        let line = cd1.padStart(2, ' ') + ' ' + cd2.padStart(2, ' ') + ' ' + cd3.padStart(2, ' ') + ' ' + cd4.padStart(2, ' ') + ' ' + cd5.padStart(2, ' ') + ' ' + cd6.padStart(2, ' ');
        outputHTML += line + `<span style='color:gray; font-size: 10px;'>&nbsp;&nbsp;${nfret}</span><br>`;
    }

    document.getElementById("output-container").innerHTML = outputHTML;
}

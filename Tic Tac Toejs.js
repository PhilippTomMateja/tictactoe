
let wert = 0;
let as = "x"; 
 
function preufe(field) {
    let wert2 = wert % 2;
    if (wert2 === 1) {
        field.textContent = 'o';
        field.setAttribute('disabled','false'); 
        wert+=1;
        as = "x";
        document.getElementById("hint").innerHTML ="Runde von Spieler " + as;
        Sieg();
    } else {
        field.textContent = 'x';
        field.setAttribute('disabled','true');
        wert+=1;
        as = "o";
        document.getElementById("hint").innerHTML = "Runde von Spieler " + as;
        Sieg();
    }
}

function Sieg() {
    let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").textContent;
    b2 = document.getElementById("b2").textContent;
    b3 = document.getElementById("b3").textContent;
    b4 = document.getElementById("b4").textContent;
    b5 = document.getElementById("b5").textContent;
    b6 = document.getElementById("b6").textContent;
    b7 = document.getElementById("b7").textContent;
    b8 = document.getElementById("b8").textContent;
    b9 = document.getElementById("b9").textContent;


    if ((b1 === 'x' || b1 === 'x') && (b2 === 'x' || b2 === 'x') && (b3 === 'x' || b3 === 'x')) {
        document.getElementById('hint').innerHTML = "Spieler x hat gewonnen";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b1 === 'x' || b1 === 'x') && (b4 === 'x' || b4 === 'x') && (b7 === 'x' || b7 === 'x')) {
        document.getElementById('hint').innerHTML = "Spieler x hat gewonnen";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b7 === 'x' || b7 === 'x') && (b8 === 'x' || b8 === 'x') && (b9 === 'x' || b9 === 'x')) {
        document.getElementById('hint').innerHTML = "Spieler x hat gewonnen";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
    }
    else if ((b3 === 'x' || b3 === 'x') && (b6 === 'x' || b6 === 'x') && (b9 === 'x' || b9 === 'x')) {
        document.getElementById('hint').innerHTML = "Spieler x hat gewonnen";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
    else if ((b1 === 'x' || b1 === 'x') && (b5 === 'x' ||b5 === 'x') && (b9 === 'x' || b9 === 'x')) {
        document.getElementById('hint').innerHTML = "Spieler x hat gewonnen";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
    else if ((b3 === 'x' || b3 === 'x') && (b5 === 'x' ||b5 === 'x') && (b7 === 'x' || b7 === 'x')) {
        document.getElementById('hint').innerHTML = "Spieler x hat gewonnen";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b2 === 'x' || b2 === 'x') && (b5 === 'x' || b5 === 'x') && (b8 === 'x' || b8 === 'x')) {
        document.getElementById('hint').innerHTML = "Spieler x hat gewonnen";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b4 === 'x' || b4 === 'x') && (b5 === 'x' || b5 === 'x') && (b6 === 'x' || b6 === 'x')) {
        document.getElementById('hint').innerHTML = "Spieler x hat gewonnen";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }

    else if ((b1 === 'o' || b1 === 'o') && (b2 === 'o' || b2 === 'o') && (b3 === 'o' || b3 === 'o')) {
        document.getElementById('hint').innerHTML = "Spieler o hat gewonnen";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b1 === 'o' || b1 === 'o') && (b4 === 'o' || b4 === 'o') && (b7 === 'o' || b7 === 'o')) {
        document.getElementById('hint').innerHTML = "Spieler o hat gewonnen";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b7 === 'o' || b7 === 'o') && (b8 === 'o' || b8 === 'o') && (b9 === 'o' || b9 === 'o')) {
        document.getElementById('hint').innerHTML = "Spieler o hat gewonnen";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
    }
    else if ((b3 === 'o' || b3 === 'o') && (b6 === 'o' ||b6 === 'o') && (b9 === 'o' || b9 === 'o')) {
        document.getElementById('hint').innerHTML = "Spieler o hat gewonnen";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
    else if ((b1 === 'o' || b1 === 'o') && (b5 === 'o' ||b5 === 'o') && (b9 === 'o' || b9 === 'o')) {
        document.getElementById('hint').innerHTML = "Spieler o hat gewonnen";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
    else if ((b3 === 'o' || b3 === 'o') && (b5 === 'o' || b5 === 'o') && (b7 === 'o' || b7 === 'o')) {
        document.getElementById('hint').innerHTML = "Spieler o hat gewonnen";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b2 === 'o' || b2 === 'o') && (b5 === 'o' || b5 === 'o') && (b8 === 'o' || b8 === 'o')) {
        document.getElementById('hint').innerHTML = "Spieler o hat gewonnen";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b4 === 'o' || b4 === 'o') && (b5 === 'o' ||b5 === 'o') && (b6 === 'o' || b6 === 'o')) {
        document.getElementById('hint').innerHTML = "Spieler o hat gewonnen";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }

    else if ((b1 === 'x' || b1 === 'o') && (b2 === 'x'|| b2 === 'o') && (b3 === 'x' || b3 === 'o') && (b4 === 'x' || b4 === 'o') && (b5 === 'x' ||b5 === 'o') && (b6 === 'x' || b6 === 'o') &&(b7 === 'x' || b7 === 'o') && (b8 === 'x' ||b8 === 'o') && (b9 === 'x' || b9 === 'o')) {
        document.getElementById('hint').innerHTML = "Spiel endet unentschieden!";
    }
}

function neustart(id, field){
    let fields = document.getElementsByClassName("feld");
    as = "x";
    wert = null;
    for (let i=0;i<fields.length;i++) {
        fields[i].textContent = "";
        fields[i].disabled = false;
    }
    document.getElementById("hint").innerHTML ="Runde von Spieler " + as;
}

function myfunction(field) {
    preufe(field);
}



function addEvents() {
    let fields = document.getElementsByClassName("feld");

    for (let i=0;i<fields.length;i++) {
        fields[i].addEventListener("click", function() {
            myfunction(fields[i]);
        })
    }
}

addEvents();


function celBtn() {
    let feh = Number(document.querySelector("#inputtext").value);
    let resultCel;

    resultCel = (5 / 9) * (feh - 32);

    document.querySelector("#result").innerHTML = resultCel.toFixed() + " C";

}

function fehBtn() {
    let cel = Number(document.querySelector("#inputtext").value);

    let resultFeh;
    resultFeh = (cel * (9 / 5)) + 32;

    document.querySelector("#result").innerHTML = resultFeh.toFixed() + " F";
}

function kevCBtn() {
    let cel = Number(document.querySelector("#inputtext").value);

    let resultKev;
    resultKev = cel + 273;

    document.querySelector("#result").innerHTML = resultKev.toFixed() + " K";
}

function kevFBtn() {
    let feh = Number(document.querySelector("#inputtext").value);

    let resultKev;
    resultKev = (feh - 32) * (9 / 5) + 273;

    document.querySelector("#result").innerHTML = resultKev.toFixed() + " K"
}
// DEKLARACJA TABLICY Z DANYMI
let arr = [];
for (let i = 1; i < 21; i++) {
  arr.push(document.getElementById(`uczen${i}`).children);
}

// fUNKCJA ZAOKRĄGLAJĄCA DO 2 MIEJSC
function Round(n, k) {
  var factor = Math.pow(10, k + 1);
  n = Math.round(Math.round(n * factor) / 10);
  return n / (factor / 10);
}

const srednia = document.getElementsByClassName("srednia");
const items = [
  "matematyka",
  "polski",
  "biologia",
  "geografia",
  "fizyka",
  "chemia",
  "informatyka"
];

const funct = () => {
  // ITERACJA PO WSZYSTKICH UCZNIACH
  for (let j = 0; j < arr.length; j++) {
    let sredn = 0;
    let ocenndst = false;
    let dodatkowezajecia = arr[j][8].value.split(", ");
    console.log(dodatkowezajecia);

    //ITERACJA PO ELEMENTACH W TABLICY
    for (let l = 0; l < 8; l++) {
      if (dodatkowezajecia.includes(items[l])) {
        if (arr[j][l + 1].value != 6) sredn += 0.5;
      }
    }

    //ITERACJA PO POLACH W KAZDYM UCZNIU
    for (let k = 1; k < 8; k++) {
      sredn += parseFloat(arr[j][k].value);
      //SPRAWDZANIE OCENY NIEDOSTATECZNEJ
      if (arr[j][k].value == 1) {
        ocenndst = true;
      }
    }
    let sredniaZaokr = Round(sredn / 7, 2);

    //ZIELONE TØO POW 4.75 SR
    if (sredniaZaokr >= 4.75) {
      arr[j][0].style = "background-color: green; color: white";
    }
    //CZERWONE TLO NDST
    if (ocenndst) {
      arr[j][0].style = "background-color: red; color: white";
    }
    srednia[j + 1].innerHTML = sredniaZaokr;
  }
};
document.getElementById("oblicz").addEventListener("click", funct);

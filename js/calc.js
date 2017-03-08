//Variabele bepalen en waarden mee geven
var operator = "";
//begin getal, waarde null
var first = null;
//eind getal, waarde null
var second = null;
//BTW standaard 21%
var btw = 1.21;

//functies definieren voor de cijfers en deze koppelen aan de HTML
function addNumber(i) {
  var screen = document.getElementsByClassName('screen')[0];
  screen.innerText = screen.innerText + i;
  second = screen.innerText;
}

//Functies definieren voor alle operators van je rekenmachine
function addOperator(knoppen) {
  var screen = document.getElementsByClassName('screen') [0];
  operator = knoppen;
  screen.innerText = "";

  if (first != null) {
    if (operator ==="+") {
      first = Number(first) + Number(second);
    }
    if (operator ==="-") {
      first = Number(first) - Number(second);
    }
    if (operator ==="*") {
      first = Number(first) * Number(second);
    }
    if (operator ==="/") {
      first = Number(first) / Number(second);
    }
    if (operator ==="+BTW") {
      first = Number(first) * Number(btw);
    }
    if (operator ==="-BTW") {
      first = Number(first) / Number(btw);
    }
  }
    else {
    first = second;
  }
}
function plusTax() {
    var screen = document.getElementsByClassName('screen')[0];
    screen.innerText = "";

    screen.innerText = Number(first) * Number(btw);
}


function minTax() {
    var screen = document.getElementsByClassName('screen')[0];
    screen.innerText = "";

    screen.innerText = Number(first) / Number(btw);
}
//berekening afmaken aan de hand van de gekozen operators
function calculate() {
    var screen = document.getElementsByClassName('screen')[0];
    screen.innerText = "";

    if (operator === "+") {
        screen.innerText = Number(first) + Number(second);
    }
    if (operator === "-") {
        screen.innerText = Number(first) - Number(second);
    }
    if (operator === "*") {
        screen.innerText = Number(first) * Number(second);
    }
    if (operator === "/") {
        screen.innerText = Number(first) / Number(second);
    }
}

//reset de rekenmachine
function reset() {
  var screen = document.getElementsByClassName('screen')[0];
  screen.innerText = "";

  operator = "";
  first = null;
  second = null;
  btw = 1.21;
}

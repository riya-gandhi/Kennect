function findPrimes() {
  var start = parseInt(document.getElementById("start").value);
  var end = parseInt(document.getElementById("end").value);

  var primes = [];

  for (var i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  renderOnPage(start, end, primes);
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function renderOnPage(start, end, primes) {
  let resultTable = document.getElementById("result");
  let tHead = document.getElementById("tablehead");

  let tRow = document.createElement("tr");
  let numberCol = document.createElement("td");
  let resultCol = document.createElement("td");
  numberCol.innerText = "Number";
  resultCol.innerText = "Result";

  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  tRow.append(numberCol, resultCol);
  tHead.innerHTML = "";
  tHead.append(tRow);
  resultTable.append(tHead);

  for (let i = start; i <= end; i++) {
    let tRow = document.createElement("tr");
    let numberCol = document.createElement("td");
    let resultCol = document.createElement("td");

    numberCol.innerText = i;
    resultCol.innerText = primes.includes(i) ? "Prime" : "Not Prime";

    tRow.append(numberCol, resultCol);
    tableBody.append(tRow);
  }
  resultTable.append(tableBody);
}

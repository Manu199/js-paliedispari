/*
- Chiedere all'utente di scegliere tra pari o dispari.
- chidere all'utente di inserire un numero tra 1 e 5.
- generiamo un numero random dal 1 al 5 per il computer.
- sommare i due numeri.
- stabilire se la somma è pari o dispari.
- stampare sull'html se ha vinto l'utente o il computer.
*/

let paridispari;

while (true) {
  paridispari = prompt('Scegli tra pari e dispari:').toLowerCase();

  if (paridispari === 'pari' || paridispari === 'dispari') {
    break;
  } else {
    alert('Devi scegliere tra pari e dispari. Riprova.');
  }
}

console.log(paridispari);

let unumber;

while (true) {
    unumber = prompt('Scegli un numero tra 1 e 5:');
    console.log(unumber);

    number = parseInt(unumber);

    if (unumber >= 1 && unumber <= 5) {
        break; 
    } else {
        alert('Devi scegliere un numero tra 1 e 5.');
    }
}


function generaNumeroCasualeTraUnoECinque() {
  const numeroCasuale = Math.random();

  const numeroTra0E4 = numeroCasuale * 5;

  const numeroTra1E5 = Math.floor(numeroTra0E4) + 1;

  return numeroTra1E5;
}

let numeroCasuale = generaNumeroCasualeTraUnoECinque();
console.log(numeroCasuale);

const somma =  numeroCasuale + number;

console.log(somma);

const isPari = somma % 2 === 0;

let win;

if ((paridispari === 'pari' && isPari) || (paridispari === 'dispari' && !isPari)) {
  win = 'Utente';
} else {
  win = 'Computer';
}

console.log(`${win} ha vinto`);

document.getElementById('output').innerHTML = `${win} ha vinto!!!` 
// + ' ' + ' ' + ' ' + 'Numero scelto da te '+ number + '  ' + ' ' + ' ' + 'Numero generato dal computer' + ' ' + numeroCasuale + ' ' + ' ' + ' ' + 'E hai scelto' + ' ' + paridispari;


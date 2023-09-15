/*
- Chiedere all'utente di scegliere tra pari o dispari.
- chidere all'utente di inserire un numero tra 1 e 5.
- generiamo un numero random dal 1 al 5 per il computer.
- sommare i due numeri.
- stabilire se la somma è pari o dispari.
- stampare sull'html se ha vinto l'utente o il computer.
*/

const paridispari = prompt('scegliere tra pari e dispar');
console.log(paridispari);

const unumber = prompt('scegliere un numero tra 1 e 5 per il');
console.log(unumber);

var numeroComputer = Math.floor(Math.random() * 5) + 1;
console.log(numeroComputer);


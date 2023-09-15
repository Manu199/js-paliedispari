
/*
- Chiedere all'utente di inserire una parola
- creare una funzione in cui comparare il contrario della parola alla parola
- stampare  sulla pagina se la parola è palindroma o meno
*/ 

const parola = prompt("Inserisci una parola:");


function reversestring(str  = parola) {
  return str.split('').reverse().join('');
}

console.log(reversestring(parola));

if (parola === reversestring(parola)) {
  document.getElementById('output').innerHTML = 'La parola è Palindroma'
}else {
  document.getElementById('output').innerHTML = 'La parola non è Palindroma'
}
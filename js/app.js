// ------------
// Palindroma, chiedi all'utente una parola e controlla se è palindroma.
// ------------
// Chiedo all'utente una parola e la salvo in una variabile
// let parolaUtente = prompt('Scrivi una parola e scopri se è palindroma!');

// dichiaro la funzione per scoprire se la parola è palindroma
function isItPalindrome(string) {
  // rendero minuscola la parola ricevuta
  let lowerCase = string.toLowerCase();

  //   con un ciclo for inverto la parola
  let reverse = '';
  for (let i = lowerCase.length - 1; i >= 0; i--) {
    reverse += lowerCase[i];
  }
  //   rimetto la prima lettera maiuscola alla parola
  let upperCase = reverse.charAt(0).toUpperCase() + reverse.slice(1);

  //   se le parole sono uguali allora è palindroma
  if (string === upperCase) {
    return console.log(
      `La parola ${string} è palindroma! Al contrario si legge sempre ${upperCase}.`
    );
  } else {
    return console.log(
      `La parola ${string} NON è palindroma! Al contrario si legge ${upperCase}`
    );
  }
}

// invoco la funzione
// isItPalindrome(parolaUtente);

// ------------
// Pari o Dispari
// ------------

// chiedo il numero da 1 a 5
let numeroUtente = Number(prompt('Inserisci un numero da 1 a 5!'));

// chiedo pari o dispari
let sceltaUtente = prompt('Scegli, Pari o Dispari?').toLowerCase();

// inizializzo funzione
function oddOrEvenGame(number, string) {
  let pari = 'pari';
  //   genero un numero da 1 a 5 per il pc
  let computerNumber = Math.floor(Math.random() * 5 + 1);
  //   sommo il numero pc e utente
  let game = number + computerNumber;
  //   variabile risultato
  let outcome = '';

  if (string === pari && game % 2 === 0) {
    outcome = 'hai Vinto!';
  } else if (string != pari && game % 3 === 0) {
    outcome = 'hai Vinto!';
  } else {
    outcome = 'hai Perso!';
  }
  console.log(
    `Hai giocato ${number} e il computer gioca ${computerNumber}, la somma dei valori è ${game}. Scegliendo ${string}, ${outcome}`
  );
}

oddOrEvenGame(numeroUtente, sceltaUtente);

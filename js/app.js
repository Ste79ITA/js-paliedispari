// Palindroma, chiedi all'utente una parola e controlla se è palindroma.

// Chiedo all'utente una parola e la salvo in una variabile
let parolaUtente = prompt('Scrivi una parola e scopri se è palindroma!');

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
isItPalindrome(parolaUtente);

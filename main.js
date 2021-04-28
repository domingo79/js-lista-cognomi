var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

//1. chiedi all’utente il cognome
var cognome_add = prompt('Inserisci il tuo Cognome');

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
cognomi.push(cognome_add);

// 3. stampa la lista ordinata alfabeticamente
cognomi = cognomi.sort()
//console.log(cognomi);

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
for (var i = 0; i < cognomi.length; i++) {
    console.log('Posizione ' + (i + 1) + ': Signor, ' + cognomi[i]);

}
document.getElementById('lista_cognomi').innerHTML = '<li>' + cognomi + '</li>';
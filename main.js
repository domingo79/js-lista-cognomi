var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

//1. chiedi all’utente il cognome
var cognome_add = prompt('Inserisci il tuo Cognome');

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
cognomi.push(cognome_add);

// copia del mio array originale
var CopyCognomi = cognomi.slice();

// 3. stampa la lista ordinata alfabeticamente
CopyCognomi = CopyCognomi.sort()

//console.log(cognomi);
var li_id = document.getElementById('lista_cognomi');
var htmlContent = '';

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
for (var i = 0; i < CopyCognomi.length; i++) {
    console.log('Posizione ' + (i + 1) + ': Signor, ' + CopyCognomi[i]);
    htmlContent += '<li>' + CopyCognomi[i] + '</li>'
}

li_id.innerHTML = htmlContent;

// cerca la posizione 
var pos = CopyCognomi.indexOf(cognome_add) + 1;
console.log(pos);
document.getElementById('posizione').innerHTML = pos;
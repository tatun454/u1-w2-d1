/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*in java script esistono diversi tipi di dati, i principali sono:
1. Stringa: è un insieme di caratteri, come parole o frasi e sno compresi tra virgolette, "Ciao"
2. Numero: rappresenta valori numerici, come 5
3. Booleano: è un tipo di dato che può essere vero o falso
4. Oggetto: è una raccolta di proprietà e valori, come un contenitore che può avere diverse cose dentro
5. NAN: è un valore che rappresenta un numero non valido
6. Undefined: è un tipo di dato che indica che una variabile non ha ancora un valore assegnato
7. Null: è un tipo di dato che indica l'assenza di valore, come se non ci fosse nulla
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Jason Ashley";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let sum = 12 + 20;
console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Ayassamy";
console.log(myName);
/*
const myName = "Ayassamy";
console.log(myName);
l'ho ovviamente commentato perché non posso riassegnare un valore ad una variabile dichiarata, altrimenti mi darebbe errore.
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sub = 4 - x;
console.log(sub);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 == name2);
console.log(name1.toLowerCase() == name2.toLowerCase());

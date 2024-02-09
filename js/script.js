/*
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
- Da quante ore è composto un giorno?
- Da quanti minuti è composta un'ora?
- Da quanti secondi è composto un minuto?
- Da quanti millisecondi è composto un secondo?
- Quanti millisecondi mi separano da domani alle 9:30?
- Esiste un oggetto JS in grado di gestire le date?
- Esistono dei metodi per trasformare una data in millisecondi?
Buon divertimento a tutte e a tutti!
*/

// definisco la data desiderata
const theBigDay = new Date("2024-02-12T09:30:00");
console.log(theBigDay);

// definisco la data di oggi
const today = new Date();


// determino i millisecondi in tutte le unità di misura
let milliseconds = 1;
let seconds = milliseconds * 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let days = hours * 24;


// calcolo i millisecondi di 3 giorni (esempio)
console.log(days * 3);


let millisecondsToday = today.getTime();
let millisecondsTheBigDay = theBigDay.getTime();

console.log("Millisecondi data di oggi: ", millisecondsToday);
console.log("Millisecondi data countdown: ", millisecondsTheBigDay);


// calcolo i millisecondi di differenza tra il momento dell'esecuzione del programma e la data del countdown
let timeLeft = millisecondsTheBigDay - millisecondsToday;
console.log("Conto alla rovescia: ", timeLeft, " millisecondi");

// calcolo i giorni restanti
let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
console.log("Giorni: ", daysLeft);

// calcolo le ore restanti
let hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
console.log("Ore: ", hoursLeft);

// calcolo i minuti restanti
let minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
console.log("Minuti: ", minutesLeft);

// calcolo i secondi restanti
let secondsLeft = Math.floor((timeLeft / (1000)) % 60);
console.log("Secondi: ", secondsLeft);

// calcolo i millisecondi restanti
let millisecondsLeft = Math.floor((timeLeft) % 1000);
console.log("Millisecondi: ", millisecondsLeft);

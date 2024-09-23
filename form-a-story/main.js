// Recupera i valori dal modulo inviato nell'URL
const words = new URLSearchParams(window.location.search);

// Pulisce e capitalizza i nomi degli animali
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Assegna le variabili con i valori utilizzati nella storia
const firstAnimal= cleanAndCap(words.get('animal-1'));
const secondAnimal = cleanAndCap(words.get('animal-2'));

const answer = cleanAndCap(words.get('answer'));
const conjunction = answer === 'Yes' ? 'e' : 'ma';

const speed = words.get('speed');
const adj1 = words.get('adj-1');

const thirdAnimal = cleanAndCap(words.get('animal-3'));
const quote = words.get('quote');

const verb1 = words.get('verb-1');
const num1 = words.get('num-1');
const message = words.get('message');

// La stringa contenente HTML e testo che popolerà la pagina story.html
const story = `<p>Un <span class="word" title="id: animal-1">${firstAnimal}</span> prendeva in giro un <span class="word" title="id: animal-2">${secondAnimal}</span> un giorno per essere così lento.</p>

<p>"Riesci mai ad arrivare da qualche parte?" chiese con una risata beffarda.</p>

<p>"<span class="word" title="id: answer">${answer}</span>," rispose il <span class="word" title="id: animal-2">${secondAnimal}</span>, "${conjunction} ci arrivo <span class="word" title="id: speed">${speed}</span> di quanto pensi. Ti sfido a una gara e te lo dimostrerò."</p>

<p>Il <span class="word" title="id: animal-1">${firstAnimal}</span> era molto <span class="word" title="id: adj-1">${adj1}</span> all'idea di correre una gara con il <span class="word" title="id: animal-2">${secondAnimal}</span>, ma per divertimento accettò. Così il <span class="word" title="id: animal-3">${thirdAnimal}</span>, che aveva acconsentito a fare da giudice, segnò la distanza e gridò, "<span class="word" title="id: quote">${quote}</span>".</p>

<p>Il <span class="word" title="id: animal-1">${firstAnimal}</span> fu presto fuori vista, e per far sentire il <span class="word" title="id: animal-2">${secondAnimal}</span> quanto fosse ridicolo per lui tentare una gara con un <span class="word" title="id: animal-1">${firstAnimal}</span>, uscì dal percorso per praticare <span class="word" title="id: verb-1">${verb1}</span> per <span class="word" title="id: num-1">${num1}</span> ore finché il <span class="word" title="id: animal-2">${secondAnimal}</span> non lo avesse raggiunto.</p>

<p>Nel frattempo il <span class="word" title="id: animal-2">${secondAnimal}</span> continuava ad andare lentamente ma costantemente e, dopo un po', passò il punto dove il <span class="word" title="animal-1">${firstAnimal}</span> stava <span class="word" title="id: verb-1">${verb1}</span>. Il <span class="word" title="id: animal-1">${firstAnimal}</span> era così preso da <span class="word" title="id: verb-1">${verb1}</span>; e quando finalmente si fermò, il <span class="word" title="id: animal-2">${secondAnimal}</span> era vicino al traguardo. Il <span class="word" title="id: animal-1">${firstAnimal}</span> corse allora al massimo della sua velocità, ma non riuscì a raggiungere il <span class="word" title="id: animal-2">${secondAnimal}</span> in tempo.</p>`;

// Recupera l'elemento title
const title = document.getElementById('title');
// Popola l'elemento title con il testo
title.innerHTML = `Il <span class="word" title="id: animal-1">${firstAnimal}</span> E Il <span class="word" title="id: animal-2">${secondAnimal}</span>`;

// Recupera l'elemento story
const storyEl = document.getElementById('story');
// Popola l'elemento story con il valore della variabile story
storyEl.innerHTML = story;

// Recupera l'elemento moral-message
const moralMessage = document.getElementById('moral-message');
// Popola l'elemento moral-message con il testo
moralMessage.innerHTML = `<span class="italics" title="id: message">"${message}"</span>`;

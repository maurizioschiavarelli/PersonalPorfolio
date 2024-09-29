/* ================== NAVBAR ================== */

let navbar = document.getElementById('nav');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 10){
        navbar.classList.add('navScroll');
    } else {
        navbar.classList.remove('navScroll');
    }
})

/* ================== TOGGLE LIGHT/DARK MODE ================== */
let body = document.querySelector('body');
let checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click',()=>{
    if(body.classList == ''){
        body.classList = 'lightMode';
    }else{
        body.classList = '';
    }
})

// let body = document.querySelector('body');
// let checkbox = document.getElementById('checkbox');

// // Funzione per applicare il tema in base alle preferenze dell'utente
// function applyTheme() {
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         body.classList.add('darkMode');
//     } else {
//         body.classList.add('lightMode');
//     }
// }

// // Chiamare la funzione al caricamento della pagina
// applyTheme();

// // Aggiungere un listener per il cambiamento delle preferenze del tema
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

// // Listener per il checkbox per cambiare manualmente il tema
// checkbox.addEventListener('click', () => {
//     if (body.classList.contains('lightMode')) {
//         body.classList.replace('lightMode', 'darkMode');
//     } else {
//         body.classList.replace('darkMode', 'lightMode');
//     }
// });

/* ================== SECTION NUMBER ================== */

//Calcolo anni di esperienza:
let numberExp = document.getElementById('numberExp');

function calcolaDifferenzaAnni(annoSelezionato) {
    const annoCorrente = new Date().getFullYear();
    return annoCorrente - annoSelezionato;
}

numberExp.innerHTML = calcolaDifferenzaAnni('2023');






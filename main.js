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



/* ================== SECTION NUMBER ================== */

//Calcolo anni di esperienza:
let numberExp = document.getElementById('numberExp');

function calcolaDifferenzaAnni(annoSelezionato) {
    const annoCorrente = new Date().getFullYear();
    return annoCorrente - annoSelezionato;
}

numberExp.innerHTML = calcolaDifferenzaAnni('2023');






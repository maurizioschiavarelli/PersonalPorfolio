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

/* ================== MODAL ================== */

let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");

let modal1Img = document.getElementById("modal1Img");
let modal2Img = document.getElementById("modal2Img");

let exitModal = document.querySelectorAll("#exitModal");

let links = document.querySelectorAll('a');

console.log(exitModal);

function getModal(modal, modalImg) {
    modalImg.addEventListener("click", () => {
        if (modal.style.display == "none") {
            modal.classList.add("modal1");
            modal.style.display = "block";
            modal.classList.add("modalShadow");
            checkbox.disabled = true;
        } else {
            modal.style.display = "none";
        }
    });

    exitModal.forEach(exit => {
        exit.addEventListener("click", () => {
            if (modal.style.display == "block") {
                modal.style.display = "none";
                checkbox.disabled = false;
            }
        });
    });

}

getModal(modal1, modal1Img);
getModal(modal2, modal2Img);



// modal1Img.addEventListener("click", ()=>{
//     if(modal1.style.display == "none"){
//         modal1.style.display = "block";
//         modal1.classList.add("modal1block");
//         modal1.classList.add("modalShadow");
//         checkbox.disabled = true;
//     }else{
//         modal1.style.display = "none";
//     }
// })

// exitModal.addEventListener("click", ()=>{
//     if(modal1.style.display == "block"){
//         modal1.style.display = "none";
//         checkbox.disabled = false;
//     }
// })









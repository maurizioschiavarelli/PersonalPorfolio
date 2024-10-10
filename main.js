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
// let numberExp = document.getElementById('numberExp');

// function calcolaDifferenzaAnni(annoSelezionato) {
//     const annoCorrente = new Date().getFullYear();
//     return annoCorrente - annoSelezionato;
// }

// numberExp.innerHTML = calcolaDifferenzaAnni('2023');

/* ================== MODAL ================== */
let main = document.getElementById("main");

let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");
let modal4 = document.getElementById("modal4");

let modal1Img = document.getElementById("modal1Img");
let modal2Img = document.getElementById("modal2Img");
let modal3Img = document.getElementById("modal3Img");
let modal4Img = document.getElementById("modal4Img");

let exitModal = document.querySelectorAll("#exitModal");

let links = document.querySelectorAll('a');

function getModal(modal, modalImg) {
    modalImg.addEventListener("click", () => {
        if (modal.style.display == "none") {
            modal.classList.remove("d-none");
            modal.style.display = "block";
            modal.classList.add("modal1");
            modal.classList.add("modalShadow");
            body.classList.add("bodyBlur");
            body.style.overflow = "hidden";
            main.style.pointerEvents = "none";
            checkbox.disabled = true;
        } else {
            modal.style.display = "none";
        }
    });

    exitModal.forEach(exit => {
        exit.addEventListener("click", () => {
            if (modal.style.display == "block") {
                modal.style.display = "none";
                main.style.pointerEvents = "";
                body.style.overflow = "";
                body.classList.remove("bodyBlur");
                checkbox.disabled = false;
            }
        });
    });

}

getModal(modal1, modal1Img);
getModal(modal2, modal2Img);
getModal(modal3, modal3Img);
getModal(modal4, modal4Img);












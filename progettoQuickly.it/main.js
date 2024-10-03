// cattura elementi
let navbar = document.querySelector('#navbar');
let navContainer = document.querySelector('#navContainer');
let swiperWrapper = document.querySelector('#swiperWrapper');
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let number3 = document.querySelector('#number3');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 0){
        navbar.classList.add('navbarScroll');
        navContainer.classList.add('nav');
    }else{
        navbar.classList.remove('navbarScroll');
        navContainer.classList.remove('nav');
    }
});

let recensioni = [
    {utente : 'Mario', commento : 'Sito molto bello', voto : 2},
    {utente : 'Mirko', commento : 'Sito molto bellissimo', voto : 5},
    {utente : 'Michele', commento : 'Sito meno bello', voto : 3},
    {utente : 'Naomi', commento : 'Sito rotto', voto : 2},
    {utente : 'Maurizio', commento : 'Sito cosi cosi', voto : 1},
];

// generazione card recensini

recensioni.forEach((recensione)=>{
    let divRecensioni = document.createElement('div');
    divRecensioni.classList.add('swiper-slide');
    divRecensioni.innerHTML = ` 
    <h3>${recensione.utente}</h3>
    <p>
      ${recensione.commento}
    </p>
    <span
      ><i
        class="${recensione.voto > 0 ? 'fa-solid' : 'fa-regular'} fa-star fa-lg"
        style="color: #ffd43b"
      ></i
      ><i
        class="${recensione.voto > 1 ? 'fa-solid' : 'fa-regular'} fa-star fa-lg"
        style="color: #ffd43b"
      ></i
      ><i
        class="${recensione.voto > 2 ? 'fa-solid' : 'fa-regular'} fa-star fa-lg"
        style="color: #ffd43b"
      ></i
      ><i
        class="${recensione.voto > 3 ? 'fa-solid' : 'fa-regular'} fa-star fa-lg"
        style="color: #ffd43b"
      ></i
      ><i
        class="${recensione.voto > 4 ? 'fa-solid' : 'fa-regular'} fa-star fa-lg"
        style="color: #ffd43b"
      ></i>
    </span>
    `
    swiperWrapper.appendChild(divRecensioni);
});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  function createInterval (element, finalNumber, time){
    let counter = 0;
  
    let interval = setInterval(()=>{
      
      if(counter < finalNumber){
        counter++;
        element.innerHTML = counter;
        }else{
          clearInterval(interval)
        }
    }, time);
  };

let observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      
      createInterval(number1, 950, 5);
      createInterval(number2, 507, 5);
      createInterval(number3, 1020, 5);
    }
  })
});

observer.observe(number1);




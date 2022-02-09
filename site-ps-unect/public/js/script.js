let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  /* isso tudo em conjunto com o css, a partir da linha 107 */
  menu.classList.toggle('fa-times'); /* Gira os 3 riscos do Header */
  // navbar.style.display = 'block';
  navbar.classList.toggle('active'); /* clicando nos tres riscos, abre o inicio, sobre, contato...*/
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  // navbar.style.display = 'none';
  navbar.classList.remove('active');
}

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#card-slider-diretorias', {
    fixedWidth: 375,
    height: 552,
    rewind: true,
    type: "loop",
    focus: "center",
    perMove: 1,
    trimSpace: false,
  })
    .mount();
});

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#card-slider-diretorias-mobile', {
    fixedWidth: 375,
    height: 552,
    rewind: true,
    focus: "none",
    perMove: 1,
    trimSpace: false,
    breakpoints:{ //ajustar o tamanho do slider de acordo com o tamanho da tela
      '397':{
        fixedWidth: 262,
        height: 460,
        gap:'1rem',
      }
    }
  })
    .mount();
});

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#card-slider-stack', {
    fixedWidth: 350,
    height: 365,
    rewind: true,
    focus: "none",
    perMove: 1,
    trimSpace: false,
      breakpoints: {
        '792':{
          gap: '1rem',
        },

        '350':{
          fixedWidth: 300,
        },

        '300':{
          fixedWidth: 200,
          gap: '10rem',
        }

      }
  })
    .mount();
});

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#card-slider-review', {
    fixedWidth: 1080,
    height: 650,
    rewind: true,
    focus: "none",
    perMove: 1,
    trimSpace: false,
      breakpoints: {
        '792':{
          gap: '1rem',
        },
        
        '1080':{
          fixedWidth: 1005,
        }
      }
  })
    .mount();
});

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#card-slider-review-mobile', {
    fixedWidth: 330,
    // height: 550,
    height: 650,
    rewind: true,
    focus: "none",
    perMove: 1,
    trimSpace: false,
    breakpoints: {
      '329':{
        fixedWidth: 289,
      },

      '288':{
        fixedWidth: 230,
      }
    }
  })
    .mount();
});
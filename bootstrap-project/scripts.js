let containerA = new ProgressBar.Circle(circleA, {
  color: '#035b7a',

  strokeWidth: 1,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true  
  },
  from: { color: '#035b7a', width: 2 },
  to: { color: '#035b7a', width: 1 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 100);
    let value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});



let containerB = new ProgressBar.Circle(circleB, {
  color: '#035b7a',

  strokeWidth: 1,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true  
  },
  from: { color: '#035b7a', width: 2 },
  to: { color: '#035b7a', width: 1 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});



let containerC = new ProgressBar.Circle(circleC, {
  color: '#035b7a',

  strokeWidth: 1,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true  
  },
  from: { color: '#035b7a', width: 2 },
  to: { color: '#035b7a', width: 1 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});



let containerD = new ProgressBar.Circle(circleD, {
  color: '#035b7a',

  strokeWidth: 1,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true  
  },
  from: { color: '#035b7a', width: 2 },
  to: { color: '#035b7a', width: 1 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 10000);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

containerA.animate(1.0);  // Number from 0.0 to 1.0
containerB.animate(1.0);  // Number from 0.0 to 1.0
containerC.animate(1.0);  // Number from 0.0 to 1.0
containerD.animate(1.0);  // Number from 0.0 to 1.0

// Scroll para as seções da página a partir do menu

let navBtn = $('.nav-item');

let bannerSection = $('#carousel-area');
let aboutSection = $('#about-area');
let servicesSection = $('#services-area');
let dataSection = $('#data-area')
let teamSection = $('#team-area');
let portfolioSection = $('#portfolio-area');
let contactSection = $('#contact-area');

let scrollTo = '';

$(navBtn).click(function() {
  
  let btnId = $(this).attr('id');
  
  if(btnId == 'about-menu') {
    scrollTo = aboutSection;
  } else if(btnId == 'services-menu') {
    scrollTo = servicesSection;
  } else if(btnId == 'data-area') {
    scrollTo = aboutSection
  } else if(btnId == 'team-menu') {
    scrollTo = teamSection;
  } else if(btnId == 'portfolio-menu') {
    scrollTo = portfolioSection;
  } else if(btnId == 'contact-menu') {
    scrollTo = contactSection;
  } else {
    scrollTo = bannerSection;
  }
  
  $([document.documentElement, document.body]).animate({      scrollTop: $(scrollTo).offset().top - 70  
}, 1500);});



// parallax
$('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})
$('#apply-content').parallax({imageSrc: 'img/pattern.png'})

// Filtro para a seção de portfólio

// pegue os estados dos botões (qual está selecionado)
// pegue os cards

// adicione um evento aos botões

// funçao de filtro  
  // se o filtro não está marcado para "todos"    
    // para cada card      
      // se o card não corresponde ao filtro        
        // esconder o card       
      // senão, ou seja, se o card corresponde ao filtro         
        // mostrar o card   
  // senão, ou seja, se o filtro está em todos    
    // para cada card      
      // mostre os elementos cards 


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



// parallax
$('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})
$('#apply-content').parallax({imageSrc: 'img/pattern.png'})
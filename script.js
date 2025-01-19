const main = document.getElementsByClassName('container')[0];
const innerCircle = document.getElementsByClassName('star__inner-circle')[0];
const logo = document.getElementsByClassName('logo')[0];
const logoBackground = document.getElementsByClassName('logo__background')[0];

document.addEventListener('DOMContentLoaded', () => {  
    // Espera 2 segundos antes de aplicar la clase
    setTimeout(() => {
      main.classList.add('background__common');
      innerCircle.classList.add('background__common');
    }, 1000);

    setTimeout(() => {
      logo.classList.add('logo--show');
      logoBackground.classList.add('logo__background--show');
    }, 3000);
  });
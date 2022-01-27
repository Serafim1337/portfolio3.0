//!-------------------------------------------------------- adaptive menu functions
function menuFunction() {
  document.querySelector('.adaptive-menu').classList.toggle('active');
 switch (currentTheme) {
   case 'dark': 
   document.querySelector('.adaptive-menu-list').classList.toggle('active');
   break;
   case 'light': 
   document.querySelector('.adaptive-menu-list-light').classList.toggle('active');
   break;
 }
  document.querySelector('body').classList.toggle('lock');
  let element = document.querySelector('#title-id');
  if(element.classList.contains('hidden')) {
    titleHideFunction();
  }
  else {
  setTimeout(titleHideFunction,200);
  }
}

function menuLinksFunction() {
  let element = document.querySelector('#menu-id');
  element.classList.toggle('opened');
}

//!---------------------------------------------- function hiding section titles while adaptive menu is active
function titleHideFunction() {
  document.querySelector('.section-title').classList.toggle('hidden');
  document.querySelector('.skills-section-content').classList.toggle('menu-view-adaption');
}

//!------------------------------------------ function closing menu by clicking on free space

document.querySelector('#menu-bg').addEventListener('click', bgHandler);

function bgHandler (event) {
  if(event.target === document.querySelector('#adaptive-menu-nav')) {
    menuFunction();
    document.querySelector('#menu-id').classList.toggle('opened');
    document.querySelector('#menu-id').setAttribute('area-expanded',false);
  }
}

//!----------------------------------------- changing images in portfolio section 

document.querySelector('.button[data-season-type="autumn"]').classList.add('button-active');

(function () {
  for(let i = 0; i < 6;i++) {
    let imgSpring = new Image();
    let imgSummer = new Image();
    let imgWinter = new Image();
    imgSpring.src = `assets/img/spring/${i+1}.jpg`;
    imgSummer.src = `assets/img/summer/${i+1}.jpg`;
    imgWinter.src = `assets/img/winter/${i+1}.jpg`;
  }
  const svgThemeSwitcher = new Image();
  svgThemeSwitcher.src = `assets/svg/dark-theme.svg`
})();    //Immediately Invoked Function (IIFE) to preload all images

const buttons = document.querySelectorAll('.button');
const portfolioImages = document.querySelectorAll('.portfolio-photo');

for(let button of buttons) {
  button.addEventListener('click', buttonClickHandler);
}

function buttonClickHandler(event) {

  if(currentTheme === 'dark') {
    event.target.classList.add('button-active'); 
  } else {
    event.target.classList.add('button-active-light-theme'); 

  }
  
  for(let button of buttons) {
    if(button === event.target) {
      continue;
    } else {
      button.classList.remove('button-active');
      button.classList.remove('button-active-light-theme');
    }
  }

  let imageCounter = 0;
  let animationDuration;

  for(let image of portfolioImages) {
    imageCounter++;
    image.src = `assets/img/${event.target.dataset.seasonType}/${imageCounter}.jpg`;
    image.classList.add('portfolio-photos-animation');
    animationDuration = parseFloat(window.getComputedStyle(image).animationDuration) * 1000;
  }

  setTimeout(removeAnimation, animationDuration);
}

function removeAnimation () {
  for(image of portfolioImages) {
    image.classList.remove('portfolio-photos-animation');
  }
}

//!------------------------------light-dark theme switching

let currentTheme = 'dark';

const themeSwitcher = document.querySelector('.theme-switcher');

themeSwitcher.addEventListener('click', themeSwitcherHandler);

function themeSwitcherHandler() {

  if(themeSwitcher.src.includes('light')) {
    themeSwitcher.src = 'assets/svg/dark-theme.svg';
   lightThemeFunction();
    return;
  } else {
    themeSwitcher.src = 'assets/svg/light-theme.svg';
    darkThemeFunction();
  } 

}

//!---------------------------- function for light theme classes

function lightThemeFunction() {

  currentTheme = 'light';

  document.body.style.backgroundColor = 'var(--white)';

  document.querySelector('.hero-container').style.backgroundImage = 'url(assets/img/hero-bg-light.jpg)';

  const text = document.querySelectorAll('.text');
  for(let textElement of text) {
    textElement.style.color = '#000000';
  }

  const navList = document.querySelector('.navigation-list');
  navList.classList.remove('navigation-list');
  navList.classList.add('navigation-list-light');

  const menuList = document.querySelector('.adaptive-menu-list');
  menuList.classList.remove('adaptive-menu-list');
  menuList.classList.add('adaptive-menu-list-light');
  
  const burgerMenuLines = document.querySelectorAll('.line');
  for(let line of burgerMenuLines) {
    line.style.stroke = 'var(--black)';
  }

  const switchLang = document.querySelector('.switch-lang');
  switchLang.classList.remove('switch-lang');
  switchLang.classList.add('switch-lang-light');

  document.querySelector('.logo-image').src = 'assets/png/logo-dark.png';
  document.querySelector('.logo-image').style.height = '50px';

  const portfolioButtons = document.querySelectorAll('.button');
  for(let button of portfolioButtons) {
    button.classList.remove('button');
    button.classList.add('button-light-theme');
    if(button.classList.contains('button-active')) {
      button.classList.remove('button-active');
      button.classList.add('button-active-light-theme');
    }
  }

  document.querySelector('.contacts-container').style.backgroundImage = 'url(assets/img/contacts-bg-light.jpg)';
  const inputs = document.querySelectorAll('.contacts-input');
  for(let input of inputs) {
    input.classList.remove('contacts-input');
    input.classList.add('contacts-input-light');
  }
  const textArea = document.querySelector('.contacts-textarea');
  textArea.classList.remove('contacts-textarea');
  textArea.classList.add('contacts-textarea-light')

  const socialsImages = document.querySelectorAll('.socials-image');
  const socials = ['instagram-light','fb-light','twitter-light','pinterest-light'];
  let i = 0;
  for(let image of socialsImages) {
    image.src =`assets/png/${socials[i]}.png`
    i++;
  }

  const footer = document.querySelector('.footer');
  footer.classList.remove('footer');
  footer.classList.add('footer-light');
}

//!---------------------------- function for dark theme classes

function darkThemeFunction() {

  currentTheme = 'dark';

  document.body.style.backgroundColor = '';

  document.querySelector('.hero-container').style.backgroundImage = '';

  const text = document.querySelectorAll('.text');
  for(let textElement of text) {
    textElement.style.color = '';
  }

  const navList = document.querySelector('.navigation-list-light');
  navList.classList.remove('navigation-list-light');
  navList.classList.add('navigation-list');

  const menuList = document.querySelector('.adaptive-menu-list-light');
  menuList.classList.remove('adaptive-menu-list-light');
  menuList.classList.add('adaptive-menu-list');

  const burgerMenuLines = document.querySelectorAll('.line');
  for(let line of burgerMenuLines) {
    line.style.stroke = '';
  }

  const switchLang = document.querySelector('.switch-lang-light');
  switchLang.classList.remove('switch-lang-light');
  switchLang.classList.add('switch-lang');

  document.querySelector('.logo-image').src = 'assets/png/logo.png';
  document.querySelector('.logo-image').style.height = '';
  
  const portfolioButtons = document.querySelectorAll('.button-light-theme');
  for(let button of portfolioButtons) {
    button.classList.remove('button-light-theme');
    button.classList.add('button');
    if(button.classList.contains('button-active-light-theme')) {
      button.classList.remove('button-active-light-theme');
      button.classList.add('button-active');
    }
  }
  
  document.querySelector('.contacts-container').style.backgroundImage = 'url(assets/img/contacts-bg.jpg)';
  const inputs = document.querySelectorAll('.contacts-input-light');
  for(let input of inputs) {
    input.classList.remove('contacts-input-light');
    input.classList.add('contacts-input');
  }
  const textArea = document.querySelector('.contacts-textarea-light');
  textArea.classList.remove('contacts-textarea-light');
  textArea.classList.add('contacts-textarea')

  const socialsImages = document.querySelectorAll('.socials-image');
  const socials = ['instagram','fb','twitter','pinterest'];
  let i = 0;
  for(let image of socialsImages) {
    image.src =`assets/png/${socials[i]}.png`
    i++;
  }

  const footer = document.querySelector('.footer-light');
  footer.classList.remove('footer-light');
  footer.classList.add('footer');
}


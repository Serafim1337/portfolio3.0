// adaptive menu functions
function menuFunction() {
  document.querySelector('.adaptive-menu').classList.toggle('active');
  document.querySelector('.adaptive-menu-list').classList.toggle('active');
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

// function hiding section titles while adaptive menu is active
function titleHideFunction() {
  document.querySelector('.section-title').classList.toggle('hidden');
  document.querySelector('.skills-section-content').classList.toggle('menu-view-adaption');
}

// function closing menu by clicking on free space

document.querySelector('#menu-bg').addEventListener('click', bgHandler);

function bgHandler (event) {
  if(event.target === document.querySelector('#adaptive-menu-nav')) {
    menuFunction();
    document.querySelector('#menu-id').classList.toggle('opened');
    document.querySelector('#menu-id').setAttribute('area-expanded',false);
  }
}

// changing images in portfolio section 

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
  event.target.classList.add('button-active'); 

  for(let button of buttons) {
    if(button === event.target) {
      continue;
    } else {
      button.classList.remove('button-active');
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

//light-dark theme switching

const themeSwitcher = document.querySelector('.theme-switcher');

themeSwitcher.addEventListener('click', themeSwitcherHandler);

function themeSwitcherHandler() {

  if(themeSwitcher.src.includes('light')) {
    themeSwitcher.src = 'assets/svg/dark-theme.svg'
    return;
  } else {
    themeSwitcher.src = 'assets/svg/light-theme.svg'
  } 

}


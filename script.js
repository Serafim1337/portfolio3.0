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

function titleHideFunction() {
  document.querySelector('.section-title').classList.toggle('hidden');
  document.querySelector('.skills-section-content').classList.toggle('menu-view-adaption');
}

function menuLinksFunction() {
  let element = document.querySelector('#menu-id');
  element.classList.toggle('opened');
  
}

document.querySelector('#menu-bg').addEventListener('click', bgHandler);

function bgHandler (event) {
  if(event.target === document.querySelector('#adaptive-menu-nav')) {
    menuFunction();
    document.querySelector('#menu-id').classList.toggle('opened');
    document.querySelector('#menu-id').setAttribute('area-expanded',false);
  }
}
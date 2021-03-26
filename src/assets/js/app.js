'use strict';

// *	Variables:
const preload = document.querySelector('#preload');
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__mobile');
const headerLogo = document.querySelector('.header__logo');
const headerMenu = document.querySelectorAll('.header__nav-link');
const burgerLine = document.querySelectorAll('.burger__line');
const toggle = document.querySelector('.header__toggle');
const lightBG = 'light-mode-bg';
const darkColor = 'dark-mode-col';
const darkBG = 'dark-mode-bg';

// !	PRELOAD

window.onload = function () {
  preload.style.display = 'none';
};

// !	TOGGLE

toggle.addEventListener('change', () => {
  // *	Header menu
  for (let i = 0; i < headerMenu.length; i++) {
    if (toggle.checked) {
      headerMenu[i].classList.toggle(darkColor);
    } else {
      headerMenu[i].classList.toggle(darkColor);
    }
  }

  // *	Burger line
  for (let i = 0; i < burgerLine.length; i++) {
    if (toggle.checked) {
      burgerLine[i].classList.toggle(lightBG);
    } else {
      burgerLine[i].classList.toggle(lightBG);
    }
  }

  // *	Header & Header logo
  if (toggle.checked) {
    header.classList.toggle(darkBG);
    mobileMenu.classList.toggle(darkBG);
    headerLogo.classList.toggle(darkColor);
  } else {
    header.classList.toggle(darkBG);
    mobileMenu.classList.toggle(darkBG);
    headerLogo.classList.toggle(darkColor);
  }
});

// !	Burger menu

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('header__active');
});

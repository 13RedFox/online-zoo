'use strict';

const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const headerMenu = document.querySelectorAll('.header__nav-link');
const toggle = document.querySelector('.header__toggle');

toggle.addEventListener('change', () => {

	for (let i = 0; i < headerMenu.length; i++) {
		if (toggle.checked) {
			headerMenu[i].classList.add('light-mode-col');
			headerMenu[i].classList.add('dark-mode-col');
		} else {
			headerMenu[i].classList.remove('dark-mode-col');
			headerMenu[i].classList.remove('light-mode-col');
		}
	}

	if (toggle.checked) {
		header.classList.remove('light-mode-bg');
		headerLogo.classList.remove('light-mode-col');
		header.classList.add('dark-mode-bg');
		headerLogo.classList.add('dark-mode-col');

	} else {
		header.classList.add('light-mode-bg');
		headerLogo.classList.add('light-mode-col');
		header.classList.remove('dark-mode-bg');
		headerLogo.classList.remove('dark-mode-col');
	}
});
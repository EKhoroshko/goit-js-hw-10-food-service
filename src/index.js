import './sass/main.scss';
import foodCards from './templation/foos-cards.hbs';
import menu from './menu.json';

const $menu = document.querySelector('.js-menu');
$menu.insertAdjacentHTML('beforeend', foodCards(menu));

const $input = document.querySelector('.theme-switch__toggle');
$input.addEventListener('change', (e) => {
    e.preventDefault();
    if (localStorage.getItem('theme') === 'dark-theme') {
        localStorage.removeItem('theme');
    }
    else {
        localStorage.setItem('theme', 'dark-theme');
    }
    addDarkMode();
});

function addDarkMode() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        document.querySelector('body').classList.add('dark-theme');
    }
    else {
        document.querySelector('body').classList.remove('dark-theme');
    }
}
addDarkMode();
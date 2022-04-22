import pets from './pets.json' assert { type: 'json' };
import { renderCard } from './card.js';

const body = document.body;
const burger = body.querySelector('[data-js="burger"]');
const nav = body.querySelector('[data-js="nav"]');
const overlay = body.querySelector('[data-js="overlay"]');
const petsContainer = body.querySelector('[data-js="pets-container"]');



// burger-menu

burger.addEventListener('click', toggleMenu);

nav.addEventListener('click', (event) => {
    if (event.target.dataset.js === 'menu-link') { closeMenu() };
});

overlay.addEventListener('click', closeMenu);

function toggleMenu() {
    burger.classList.toggle('burger--open');
    nav.classList.toggle('nav--open');
    overlay.classList.toggle('overlay--active');
    body.classList.toggle('body--overflow');
}

function closeMenu() {
    burger.classList.remove('burger--open');
    nav.classList.remove('nav--open');
    overlay.classList.remove('overlay--active');
    body.classList.remove('body--overflow');
}



pets.forEach(pet => {
    const card = renderCard(pet);
    
    petsContainer.appendChild(card);
})
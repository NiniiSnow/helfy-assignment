import { Header } from './components/header/header.js';
import { Heroes } from './components/heroes/heroes.js';
import { Carousel, initCarousel } from './components/carousel/carousel.js';
import { Footer } from './components/footer/footer.js';

document.getElementById('header').innerHTML = Header();

const mainContent = document.getElementById('main-content');

mainContent.innerHTML = `
  ${Heroes()},
  ${Carousel()},
  ${Footer()}
`;

initCarousel();
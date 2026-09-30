import { Header } from './components/header/header.js';

document.getElementById('header').innerHTML = Header();

const mainContent = document.getElementById('main-content');

mainContent.innerHTML = `
  <p>Main content goes here</p>
`;
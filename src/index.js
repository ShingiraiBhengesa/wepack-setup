import koala from './assets/koala.jpg'
import './style.css';



const title = document.createElement('h3');
title.textContent = 'Webpack made easy!';

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = koala;
page.appendChild(img);
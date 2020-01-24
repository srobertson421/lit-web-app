import { render, html } from 'https://unpkg.com/lit-html?module';
import page from "//unpkg.com/page/page.mjs";
import Observable from './Observable.js';

const currentRoute = new Observable('/');
const navLinks = document.querySelectorAll('.nav-link');

currentRoute.subscribe(newRoute => {
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.dataset.path === newRoute) {
      link.classList.add('active');
    }
  });
});

const renderRoot = document.getElementById('content-render');

const home = () => {
  return html`
    <h1>Home</h1>
  `;
}

const about = () => {
  return html`
    <h1>About</h1>
  `;
}

const contact = () => {
  return html`
    <h1>Contact</h1>
  `;
}

page('/', () => {
  currentRoute.value = '/';
  render(home(), renderRoot);
});

page('/about', () => {
  currentRoute.value = '/about';
  render(about(), renderRoot);
});

page('/contact', () => {
  currentRoute.value = '/contact';
  render(contact(), renderRoot);
});

page();
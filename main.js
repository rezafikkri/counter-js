import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter, setupMultiple } from './counter';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://rezafikkri.github.io" target="_blank">
      <img src="/Reza logo.svg" class="logo reza" alt="Reza logo"/>
    </a>
    <h1>Hello Counter!</h1>
    <div class="card">
      <button id="counter" type="button">Count is 0</button>
      <button id="multiple" type="button">+1</button>
    </div>
    <p class="read-the-docs">
      Click on the logo to learn more
    </p>
  </div>
`;

let count = 0;
let multiple = 1;

document.querySelector('button#counter').addEventListener('click', (e) => {
  count = setupCounter(count, multiple);
  e.target.innerText = `Count is ${count}`;
});

document.querySelector('button#multiple').addEventListener('click', (e) => {
  multiple = setupMultiple(multiple);
  e.target.innerText = `+${multiple}`;
});

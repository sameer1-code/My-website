import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

  const toggle = document.getElementById('toggle');
  const monthlyText = document.getElementById('monthlyText');
  const yearlyText = document.getElementById('yearlyText');

  if (toggle && monthlyText && yearlyText) {
    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        yearlyText.classList.remove('text-gray-400');
        yearlyText.classList.add('text-gray-800', 'font-bold');

        monthlyText.classList.remove('text-gray-800', 'font-bold');
        monthlyText.classList.add('text-gray-400');
      } else {
        monthlyText.classList.remove('text-gray-400');
        monthlyText.classList.add('text-gray-800', 'font-bold');

        yearlyText.classList.remove('text-gray-800', 'font-bold');
        yearlyText.classList.add('text-gray-400');
      }
    });
  }

const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#mobile-menu');

if (btn && menu) {
  btn.addEventListener('click', () =>{
      menu.classList.toggle('hidden');
  });
}
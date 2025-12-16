import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

const productGallery = document.querySelectorAll('.gallery');
const filterButtons = document.querySelectorAll('.filters button');








function displayProducts(items) {
  productGallery.innerHTML = "";
    items.forEach(item => {
    const cardHTML = `
      <div class="card">
        <div class="img">
          <img src="${item.url}" alt="${item.alt}">
        </div>
        <div class="h2"><h2>${item.name}</h2></div>
        <div class="h3"><h3>${item.category}</h3></div>
      </div>
    `;
    productGallery.insertAdjacentHTML("beforeend", cardHTML);
  });
}




displayProducts(gallery);




filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
   
    if (category === "All") {
      displayProducts(gallery);
    } else {
      const filtered = gallery.filter(item => item.category === category);
      displayProducts(filtered);
    }
  });


  const userName = document.querySelector(".user-name");
const userUrl = document.querySelector(".user-url");
const userCategory = document.querySelector(".user-category");
const addBtn = document.querySelector(".add-btn");






addBtn.addEventListener("click", () => {
  const newArt = {
    name: userName.value,
    url: userUrl.value,
    category: userCategory.value,
    alt: userName.value
  };
  gallery.push(newArt);
  displayProducts(gallery);
  userName.value = "";
  userUrl.value = "";
  userCategory.value = "";
});






});








const modeToggle = document.querySelector(".mode-toggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    modeToggle.textContent = "Light Mode";
  } else {
    modeToggle.textContent = "Dark Mode";
  }
});

































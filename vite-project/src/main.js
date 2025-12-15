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


const gallery = [
  {
    name: "Ariana Grande",
    url: "https://i.pinimg.com/736x/92/a4/6f/92a46f59f953227a34ad3f20b287f261.jpg",
    category: "Thank U, Next",
    alt: "Ariana Grande"
  },
  {
    name: "Ariana Grande",
    url: "https://i.pinimg.com/474x/29/52/09/2952094b29a582ad69fd3987ebc7a206.jpg",
    category: "Yours Truly",
    alt: "Ariana Grande"
  },
   {
    name: "Ariana Grande",
    url: "",
    category: "Eternal Sunshine",
    alt: "Ariana Grande"
  },
  {
    name: "Ariana Grande",
    url: "https://cdnb.artstation.com/p/assets/images/images/033/168/749/large/leo-whatsapp-image-2020-12-17-at-18-58-02.jpg?1608638636",
    category: "Positions",
    alt: "Ariana Grande"
  },
   {
    name: "Ariana Grande",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBHBumVfTjlFoUZKX9AOVJ7ZiF_gVpVEt5RylPjKiFOfk4awMYkswcOsd9XbsfzBTD2w&usqp=CAU",
    category: "Sweetener",
    alt: "Ariana Grande"
  },
   {
    name: "Ariana Grande",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RgibqUVL31uyP1AC9uhgrHGTVWyvWWs9Hw&s",
    category: "Eternal Sunshine",
    alt: "Ariana Grande"
  },
  {  
    name: "Ariana Grande",
    url: "https://i.pinimg.com/736x/0b/41/23/0b4123dfad5ee2bc3c051293a21ab35b.jpg",
    category: "Thank U, Next",
    alt: "Ariana Grande"
  },
  {
    name: "Ariana Grande",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseKU1t_FTyyIyzXqdoyeQtF3HrQdPgOurUg&s",
    category: "My Everything",
    alt: "Ariana Grande"
  },
   {
    name: "Ariana Grande",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElOgLc8YJ7Q4QiIj1gQj4yCggqCqQ-u0FNw&s",
    category: "Eternal Sunshine",
    alt: "Ariana Grande"
  },
    {
    name: "Ariana Grande",
    url: "https://i.pinimg.com/736x/a1/b7/83/a1b783ed5b9da04c59961300c864901d.jpg",
    category: "Thank U, Next",
    alt: "Ariana Grande"
  },
  {
    name: "Ariana Grande",
    url: "https://i.pinimg.com/736x/a9/76/08/a97608c612548a68d22172ac072f9963.jpg",
    category: "Sweetener",
    alt: "Ariana Grande"
  },
    {
    name: "Ariana Grande",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0cmCb5cACj_w4BarXr9J47i1fMF-NRirxxw&s",
    category: "Wicked",
    alt: "Ariana Grande"
  },
  {
    name: "Ariana Grande",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/da63f2c9-bc83-4ac1-b2ad-65c3ce66779d/d7qujnj-69b0419b-bc0c-4e90-83b0-b522b18b7e2d.jpg/v1/fill/w_1024,h_1024,q_75,strp/ariana_grande___my_everything__draw__by_ivantenorio_d7qujnj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiIvZi9kYTYzZjJjOS1iYzgzLTRhYzEtYjJhZC02NWMzY2U2Njc3OWQvZDdxdWpuai02OWIwNDE5Yi1iYzBjLTRlOTAtODNiMC1iNTIyYjE4YjdlMmQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dEqMo_rbJsIEQff1Dl9qfiTcW7GhfmT4rtVMmil2E9I",
    category: "My Everything",
    alt: "Ariana Grande"
  },
  {
    name: "Ariana Grande",
    url: "https://i.pinimg.com/736x/34/09/b6/3409b6365713392660ae7ffb9106427d.jpg",
    category: "Sweetener",
    alt: "Ariana Grande"
  },
  {
    name: "Ariana Grande",
    url: "",
    category: "Thank U, Next",
    alt: "Ariana Grande"
  },
    {
    name: "Ariana Grande",
    url: "https://i.pinimg.com/736x/16/92/f3/1692f3692edc7d265df37d95cf0d84d1.jpg",
    category: "Dangerous Woman",
    alt: "Ariana Grande"
  },
    {
    name: "Ariana Grande",
    url: "https://i.redd.it/7dljvb02b5ce1.jpeg",
    category: "Wicked",
    alt: "Ariana Grande"
  },
  {
    name: "Ariana Grande",
    url: "https://i.pinimg.com/736x/f5/a1/ab/f5a1ab5b5f8c558ffeeff03ccc454e3c.jpg",
    category: "Positions",
    alt: "Ariana Grande"
  },
  {
    name: "Ariana Grande",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYMcYniTeZHJ8h6FK3Xh3Q7g4yFCx4a7FQw&s",
    category: "Eternal Sunshine",
    alt: "Ariana Grande"
  },
    {
    name: "Ariana Grande",
    url: "https://64.media.tumblr.com/0ef22742938b6de398e12e6608ba0314/tumblr_o4iws6IBaf1rvy9w2o1_1280.pnj",
    category: "Dangerous Woman",
    alt: "Ariana Grande"
  },
  {
    name: "Ariana Grande",
    url: "https://stuyspec-media.s3.us-east-2.amazonaws.com/rewrite_media/666b5650-d8c9-11ed-a1be-59a78b1a51d6.jpg",
    category: "Positions",
    alt: "Ariana Grande"
  },
  {
    name: "Ariana Grande",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F745556913346578407%2F&psig=AOvVaw2hThwLi7L0_LwIcsbqbxoO&ust=1764176574994000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCKiI7oTkjZEDFQAAAAAdAAAAABAr",
    category: "Wicked",
    alt: "Ariana Grande"
  },
    {
    name: "Ariana Grande",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4wWRKdA8R9qbSCGAeZmcOqyvzdrtlfM-UQ&s",
    category: "Eternal Sunshine",
    alt: "Ariana Grande"
  },
];



const productGallery = document.querySelector('.gallery');
const filterButtons = document.querySelector('.filters button');




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





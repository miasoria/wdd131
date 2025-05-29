document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.textContent = nav.classList.contains("show") ? "✖" : "☰";
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Antofagasta Chile",
    location: "Antofagasta, Chile",
    dedicated: "2025, June, 15",
    area: 26163,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-60193-main.jpg"
  },
  {
    templeName: "Okinawa Japon",
    location: "Okinawa, Japón",
    dedicated: "2023, November, 12",
    area: 12437,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg"
  },
  {
    templeName: "Frankfutr Germany",
    location: "Frankfutr, Germany",
    dedicated: "2019, October, 20",
    area: 32895,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"
  },
  {
    templeName: "Preston England",
    location: "Preston, England",
    dedicated: "1998, June, 7-10",
    area: 69630,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-45357-main.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii",
    dedicated: "19919, November, 27-30",
    area: 42100,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
  },
];

const container = document.getElementById("templesContainer");

function displayTemples(temples) {
  container.innerHTML = "";

  temples.forEach(temple => {
    const card = document.createElement("section");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Ubicación: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicado: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Área: ${temple.area.toLocaleString()} pies²`;

    const image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `Imagen del templo de ${temple.templeName}`);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    container.appendChild(card);
  });
}

displayTemples(temples);

const btnAll   = document.getElementById("filterAll");
const btnOld   = document.getElementById("filterOld");
const btnNew   = document.getElementById("filterNew");
const btnLarge = document.getElementById("filterLarge");
const btnSmall = document.getElementById("filterSmall");

function getYear(temple) {
  return parseInt(temple.dedicated.split(",")[0]);
}

function clearActive() {
  [btnAll, btnOld, btnNew, btnLarge, btnSmall]
    .forEach(b => b.classList.remove("active"));
}

btnAll.addEventListener("click", () => {
  clearActive();
  btnAll.classList.add("active");
  displayTemples(temples);
});

btnOld.addEventListener("click", () => {
  clearActive();
  btnOld.classList.add("active");
  const oldTemples = temples.filter(t => getYear(t) < 1900);
  displayTemples(oldTemples);
});

btnNew.addEventListener("click", () => {
  clearActive();
  btnNew.classList.add("active");
  const newTemples = temples.filter(t => getYear(t) >= 2000);
  displayTemples(newTemples);
});

btnLarge.addEventListener("click", () => {
  clearActive();
  btnLarge.classList.add("active");
  const largeTemples = temples.filter(t => t.area > 90000);
  displayTemples(largeTemples);
});

btnSmall.addEventListener("click", () => {
  clearActive();
  btnSmall.classList.add("active");
  const smallTemples = temples.filter(t => t.area <= 90000);
  displayTemples(smallTemples);
});
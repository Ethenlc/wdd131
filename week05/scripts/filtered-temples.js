// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  hamburger.textContent = hamburger.textContent === "☰" ? "✖" : "☰"; // Change symbol
});

// Footer copyright year and last modified date
const footer = document.querySelector("footer");
const year = new Date().getFullYear();
const lastModified = document.lastModified;

footer.innerHTML = `&copy; ${year} Ethen Campbell, Idaho • Last Modified: ${lastModified}`;

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
    templeName: "Idaho Falls  Idaho",
    location: "Idaho Falls, Idaho",
    dedicated: "1940, October, 19",
    area: 85624,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-31085-main.jpg"
  },
  {
    templeName: "Las Vegas Nevada",
    location: "Las Vegas, Nevada",
    dedicated: "1989, December, 16",
    area: 80350,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/las-vegas-nevada-temple/las-vegas-nevada-temple-35604-main.jpg"
  },
  {
    templeName: "London England",
    location: "London, England",
    dedicated: "1958, September, 7",
    area: 42652,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
  },
  // Add more temple objects here...
];

const gallery = document.querySelector('.gallery');
const navLinks = document.querySelectorAll('#nav-menu a');

function createTempleCard(temple) {
  const card = document.createElement('div');
  card.classList.add('temple-card');

  card.innerHTML = `<img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
    <h3>${temple.templeName}</h3>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area} sq. ft.</p>`;
  return card;
}

function displayTemples(filterFunc) {
  gallery.innerHTML = '';
  const filteredTemples = filterFunc ? temples.filter(filterFunc) : temples;
  filteredTemples.forEach(temple => gallery.appendChild(createTempleCard(temple)));
}

const filters = {
  home: () => true,
  old: temple => new Date(temple.dedicated).getFullYear() < 1900,
  new: temple => new Date(temple.dedicated).getFullYear() > 2000,
  large: temple => temple.area > 90000,
  small: temple => temple.area < 10000,
};

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const filterName = link.textContent.toLowerCase();
    displayTemples(filters[filterName]);
  });
});

displayTemples(filters.home);
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

footer.innerHTML = `
  &copy; ${year} Ethen Campbell, Idaho • Last Modified: ${lastModified}
`;

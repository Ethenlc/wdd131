document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    // Contact form submission (for enhanced UX with Formspree)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                event.preventDefault(); // Prevent form submission
                alert('Please fill out all fields.');
                return;
            }
        });
    } else {
        console.log("Contact form not found");
    }

    // Example of using objects, arrays, and template literals
    const projects = [
        { title: 'Racing in Pygame', description: 'A racing minigame built to practice my skill in Pygame.' },
        { title: 'Hangman in Rust', description: 'A simple hangman game built in Rust programming language.' },
        { title: 'Drawing in TypeScript', description: 'A program in TypeScript that lets you draw with extra functionality.' }
    ];

    projects.forEach(project => {
        console.log(`Project: ${project.title} - ${project.description}`);
    });

    // Footer copyright year and last modified date
    const footer = document.querySelector('footer');
    if (footer) {
        const year = new Date().getFullYear();
        const lastModified = document.lastModified;

        footer.innerHTML = `
          &copy; ${year} Ethen Campbell, Idaho • Last Modified: ${lastModified}
        `;
        console.log("Footer updated");
    } else {
        console.log("Footer not found");
    }
});
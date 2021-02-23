
// Navbar observer
const navbar = document.querySelector('.navbar');
const sectionOne = document.querySelector('.intro');

const sectionOneOptions = { 
    rootMargin: "-700px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navbar.classList.add("navbar-invert");
        } else {
            navbar.classList.remove("navbar-invert");
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Responsive hamburger menu 
const hamburgerButton = document.getElementById('hamburger-button');
const navLinks = document.getElementById('navbar-navigation')

hamburgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
})

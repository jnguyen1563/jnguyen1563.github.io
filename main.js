const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const sectionOne = document.querySelector('.intro');

const sectionOneOptions = { 
    rootMargin: "-600px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navbar.classList.add("navbar-scroll");
        } else {
            navbar.classList.remove("navbar-scroll");
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);
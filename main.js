const navbar = document.querySelector('.navbar');
const sectionOne = document.querySelector('.intro');

const sectionOneOptions = { 
    rootMargin: "-650px 0px 0px 0px"
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
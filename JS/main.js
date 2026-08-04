const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener("click", function() {

        links.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });
});
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.2
});

reveals.forEach(item => {
    observer.observe(item);
});


const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
    });
}
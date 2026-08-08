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







emailjs.init("Qy3d9M2ojpUlBbZy1");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const templateParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send(
            "service_69izi9q",
            "template_8v182cl",
            templateParams
        )
        .then(function() {
            alert("Message sent successfully!");
            contactForm.reset();
        })
        .catch(function(error) {
            console.error(error);
            alert("Failed to send message.");
        });
});
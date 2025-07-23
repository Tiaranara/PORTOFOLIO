// Simple JS for contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('formAlert').classList.remove('d-none');
        contactForm.reset();
    });
}

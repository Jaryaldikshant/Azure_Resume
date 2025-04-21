document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const messageWarning = document.getElementById('message-warning');
    const messageSuccess = document.getElementById('message-success');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const loader = document.getElementById('image-loader');

    // Hide message boxes initially
    messageWarning.style.display = 'none';
    messageSuccess.style.display = 'none';
    loader.style.display = 'none';

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show loader
        loader.style.display = 'block';
        submitButton.disabled = true;

        // Get form data
        const formData = {
            to_name: 'Dikshant', // Your name
            from_name: document.getElementById('contactName').value,
            from_email: document.getElementById('contactEmail').value,
            subject: document.getElementById('contactSubject').value || 'New Contact Form Submission',
            message: document.getElementById('contactMessage').value
        };

        // Send email using EmailJS
        emailjs.send('service_3x43gc8', 'template_5xx0qvo', formData)
            .then(function() {
                // Hide loader
                loader.style.display = 'none';
                submitButton.disabled = false;

                // Show success message
                messageSuccess.style.display = 'block';
                messageWarning.style.display = 'none';

                // Reset form
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    messageSuccess.style.display = 'none';
                }, 5000);
            })
            .catch(function(error) {
                // Hide loader
                loader.style.display = 'none';
                submitButton.disabled = false;

                // Show error message
                messageWarning.innerHTML = 'Sorry, there was an error sending your message. Please try again later.';
                messageWarning.style.display = 'block';
                messageSuccess.style.display = 'none';

                console.error('Error:', error);
            });
    });
}); 
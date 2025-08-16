// Add class to body when on skills page
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('#nav a');
    const sections = document.querySelectorAll('section');
    const body = document.body;

    // Function to check which section is in view
    function checkSectionInView() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY + 100; // Adding offset for better detection

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });

        // Update navigation classes
        navLinks.forEach(link => {
            link.parentElement.classList.remove('current');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.parentElement.classList.add('current');
            }
        });

        // Add/remove skills-page class
        if (currentSection === 'resume') {
            body.classList.add('skills-page');
        } else {
            body.classList.remove('skills-page');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', checkSectionInView);
    
    // Initial check
    checkSectionInView();
}); 
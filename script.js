 
document.addEventListener('DOMContentLoaded', function() {
     
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
             
            e.preventDefault();

             
            let targetId = this.getAttribute('href');
            
             
            let targetElement = document.querySelector(targetId);

            if(targetElement) {
                 
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
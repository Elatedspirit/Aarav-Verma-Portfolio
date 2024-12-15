document.getElementById('navbar-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.navbar-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
document.addEventListener('DOMContentLoaded', function() {
    const sectionImage = document.getElementById('section-image');
    
    sectionImage.addEventListener('mouseenter', () => {
        sectionImage.style.transform = 'scale(1.05)';
    });

    sectionImage.addEventListener('mouseleave', () => {
        sectionImage.style.transform = 'scale(1)';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('download-button');

    button.addEventListener('mouseenter', () => {
        const water = document.getElementById('water');
        water.style.height = '100%';
    });

    button.addEventListener('mouseleave', () => {
        const water = document.getElementById('water');
        water.style.height = '0';
    });
});

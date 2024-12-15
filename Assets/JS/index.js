document.getElementById('navbar-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.navbar-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
/*Water Level**/
document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.circle');
    const water = document.getElementById('water');
    const circleLink = document.getElementById('circle-link');

    circle.addEventListener('mouseenter', () => {
        water.style.height = '100%';
    });

    circle.addEventListener('mouseleave', () => {
        water.style.height = '0';
    });

    water.addEventListener('transitionend', () => {
        if (water.style.height === '100%') {
            circleLink.setAttribute('href', 'aboutus.html'); // Change this to your desired URL
        } else {
            circleLink.removeAttribute('href','aboutus.html');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.social-icon img');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2)';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });
});

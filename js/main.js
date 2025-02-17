// Handle smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = '#fff';
    }
});

// Shopping cart functionality
let cartItems = [];
const cartBtn = document.querySelector('.cart-btn');

cartBtn.addEventListener('click', () => {
    alert('Shopping cart feature coming soon!');
});

// Search functionality
const searchBar = document.querySelector('.search-bar button');
searchBar.addEventListener('click', () => {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput.value.trim() !== '') {
        alert(`Searching for restaurants near: ${searchInput.value}`);
    } else {
        alert('Please enter your delivery address');
    }
});

// Login button functionality
const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', () => {
    alert('Login feature coming soon!');
});

// Add animation on scroll for restaurant cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.restaurant-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

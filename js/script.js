// Dynamically load navbar.html into the navbar placeholder
document.addEventListener('DOMContentLoaded', () => {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');

    fetch('components/navbar.html')
        .then((response) => response.text())
        .then((data) => {
            navbarPlaceholder.innerHTML = data;
        })
        .catch((error) => console.error('Error loading navbar:', error));

    // JavaScript to toggle active class on the navigation links
    const links = document.querySelectorAll('.nav-links a');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            links.forEach((link) => link.classList.remove('active'));

            // Add active class to the clicked link
            e.target.classList.add('active');
        });
    });

    // Add event listener to toggle navbar visibility on hamburger click
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle the visibility of the nav-links container
            navLinks.classList.toggle('active');
        });
    }
});

// Optional: Add shadow effect on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});





document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    // Function to add hover effect
    function addHoverEffect(box) {
        const icon = box.querySelector('i');
        const title = box.querySelector('h3');
        const button = box.querySelector('button');

        // Apply hover style changes
        icon.style.color = '#bde162'; // Change logo color on hover
        title.style.color = '#bde162'; // Change title color on hover
        button.style.backgroundColor = '#bde162'; // Change button background color
    }

    // Function to remove hover effect
    function removeHoverEffect(box) {
        const icon = box.querySelector('i');
        const title = box.querySelector('h3');
        const button = box.querySelector('button');

        // Reset styles when hover is removed
        icon.style.color = '#1a1a2e'; // Reset logo color
        title.style.color = '#333'; // Reset title color
        button.style.backgroundColor = '#1a1a2e'; // Reset button background color
    }

    // Add event listeners to each box
    boxes.forEach(function (box) {
        box.addEventListener('mouseenter', function () {
            addHoverEffect(box);
        });

        box.addEventListener('mouseleave', function () {
            removeHoverEffect(box);
        });
    });
});





let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
        dots[i].classList.toggle('active', i === index);
    });
    currentSlideIndex = index;
}

function currentSlide(index) {
    showSlide(index);
}

// Automatically go to the next slide every 5 seconds
setInterval(() => {
    const nextIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(nextIndex);
}, 3000);



// Load the footer content from footer.html into the footer-container
    fetch('components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
      });


// Simple JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Dynamic greeting based on time of day
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }
    alert(greeting + ' Welcome to Malik Travels!');

    // Image gallery interaction
    const images = document.querySelectorAll('.gallery img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            alert('You clicked on: ' + this.alt);
        });
    });

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Dynamic date display
    const dateElement = document.createElement('div');
    dateElement.textContent = 'Today\'s date: ' + new Date().toLocaleDateString();
    document.querySelector('header').appendChild(dateElement);

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const destination = document.getElementById('destination').value;
        const dates = document.getElementById('dates').value;

        if (!name || !email || !destination || !dates) {
            alert('Please fill out all fields before submitting the form.');
            event.preventDefault(); // Prevent form submission
        }
    });

    // Reset form functionality
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Form';
    resetButton.type = 'button';
    resetButton.addEventListener('click', function() {
        form.reset();
    });
    form.appendChild(resetButton);
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('login-form');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (add your own logic here)
        if (username === 'user' && password === 'password') {
            // Redirect to another HTML file if credentials are correct
            window.location.href = 'index.html'; // Change this to your target page
        } else {
            alert('Invalid username or password');
        }
    });
});

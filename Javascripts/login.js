document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // Retrieve dummy user data from localStorage for demonstration
    const dummyUsers = JSON.parse(localStorage.getItem('tech4hopeUsers')) || {};

    // --- Login Form Submission ---
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log("Hello")
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Dummy client-side check for demonstration using localStorage data:
        if (dummyUsers[email] && dummyUsers[email].password === password) {
            sessionStorage.setItem("loggedInUserName",dummyUsers[email].candidateName)
            alert('Login successful! (Dummy login for Tech4Hope)');
            // In a real application, redirect to a dashboard or welcome page
             window.location.href = 'candidate_dashboard.html';
        } else {
            alert('Invalid Email ID or Password.');
        }
    });
});
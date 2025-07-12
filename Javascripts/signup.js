document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = {
            candidateName: document.getElementById('candidateName').value,
            fatherHusbandName: document.getElementById('fatherHusbandName').value,
            villageName: document.getElementById('villageName').value,
            talukName: document.getElementById('talukName').value,
            districtName: document.getElementById('districtName').value,
            dob: document.getElementById('dob').value,
            age: document.getElementById('age').value,
            familyMembers: document.getElementById('familyMembers').value,
            qualification: document.getElementById('qualification').value,
            caste: document.getElementById('caste').value,
            gender: document.getElementById('gender').value,
            tribal: document.getElementById('tribal').value,
            pwd: document.getElementById('pwd').value,
            singleParentWidow: document.getElementById('singleParentWidow').value,
            aadharNumber: document.getElementById('aadharNumber').value,
            candidatePhone: document.getElementById('candidatePhone').value,
            parentPhone: document.getElementById('parentPhone').value,
            mobiliserName: document.getElementById('mobiliserName').value,
            supportedProject: document.getElementById('supportedProject').value,
            email: document.getElementById('email').value, // Added email
            password: document.getElementById('password').value, // Added password
            securityQuestion1: document.getElementById('securityQuestion1').value,
            securityAnswer1: document.getElementById('securityAnswer1').value,
            securityQuestion2: document.getElementById('securityQuestion2').value,
            securityAnswer2: document.getElementById('securityAnswer2').value
        };

        console.log('Signup Data:', formData);

        // --- IMPORTANT: Backend Integration Placeholder ---
        // In a real application, you would send 'formData' to a secure backend server
        // using fetch() or XMLHttpRequest. The backend would:
        // 1. Validate data (server-side validation is crucial!)
        // 2. Hash the password and security answers (NEVER store plain text!)
        // 3. Store data in a database.
        // 4. Respond with success/failure.

        /* Example Backend Call (Conceptual)
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Signup successful! Please log in.');
                window.location.href = 'login.html'; // Redirect to login page
            } else {
                alert('Signup failed: ' + (data.message || 'An error occurred.'));
            }
        })
        .catch((error) => {
            console.error('Error during signup:', error);
            alert('An error occurred during signup. Please try again later.');
        });
        */

        // For this client-side demo, we'll just log and simulate success:
        alert('Signup data processed (client-side only). In a real app, this goes to a secure backend!');
        // You might want to save some dummy user data to localStorage for the login.js to pick up
        // This is for DEMONSTRATION PURPOSES ONLY and is NOT secure for real applications.
        const users = JSON.parse(localStorage.getItem('tech4hopeUsers')) || {};
        users[formData.email] = {
            candidateName:formData.candidateName,
            password: formData.password, // In real app, this would be hashed
            securityQuestions: {
                [formData.securityQuestion1]: formData.securityAnswer1, // In real app, these would be hashed
                [formData.securityQuestion2]: formData.securityAnswer2
            },
            questionText: {
                [formData.securityQuestion1]: document.querySelector(`#securityQuestion1 option[value="${formData.securityQuestion1}"]`).textContent,
                [formData.securityQuestion2]: document.querySelector(`#securityQuestion2 option[value="${formData.securityQuestion2}"]`).textContent
            }
        };
        localStorage.setItem('tech4hopeUsers', JSON.stringify(users));

        window.location.href = 'login.html'; // Redirect to login page after "signup"
    });
});
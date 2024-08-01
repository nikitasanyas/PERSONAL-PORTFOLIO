 // Function to show an alert based on form validation
function show() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('mail').value;
    const number = document.getElementById('no').value;
    const subject = document.getElementById('subj').value;
    const message = document.getElementById('message').value;



// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


    // Regular expression for validating names
    const namePattern = /^[a-zA-Z ]+$/;
    
    // Basic validation
    if (firstName === '' || surname === '' || email === '' || number === '' || subject === '' || message === '') {
        alert('Please fill out all fields.');
        return false;
    }
    
    // Validate first name
    if (!namePattern.test(firstName)) {
        alert("Please enter a valid first name.");
        return false;
    }
    
    // Validate surname
    if (!namePattern.test(surname)) {
        alert("Please enter a valid surname.");
        return false;
    }



    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate mobile number (e.g., ensure it's 10 digits long)
    const numberPattern = /^[0-9]{10}$/;
    if (!numberPattern.test(number)) {
        alert("Please enter a valid mobile number (10 digits).");
        return false;
    }
    
     



    // If all validations pass
    alert('Form submitted successfully!');
    // Optionally, you can add code here to handle form submission, e.g., sending data to a server
    // For demonstration purposes, we'll just clear the form
    document.getElementById('contactForm').reset();
}

// Attach the show() function to the form's submit event
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    show(); // Call the show() function
});


const nav = document.querySelector('.navbar');
        const toggleButton = document.querySelector('.menu-toggle');
        toggleButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

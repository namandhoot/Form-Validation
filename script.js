document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const cgpa = parseFloat(document.getElementById("cgpa").value.trim());
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

 
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
        alert("Please enter a valid CGPA between 0.0 and 10.0.");
        return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number containing only digits.");
        return;
    }

   
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid college email address (e.g., user@rknec.edu).");
        return;
    }

    alert("Form submitted successfully!");
    this.reset(); // Reset the form
});

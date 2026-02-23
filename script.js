// Contact Form Handling
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const error = document.getElementById("error");

        // Validation
        if (!name || !email || !message) {
            error.textContent = "All fields are required!";
            return;
        }

        // Email format validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            error.textContent = "Enter valid email!";
            return;
        }

        error.textContent = "";

        // Get existing contacts
        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

        // Add new contact
        contacts.push({ name, email, message });

        // Save to LocalStorage
        localStorage.setItem("contacts", JSON.stringify(contacts));

        alert("Form submitted successfully!");

        form.reset();
    });
}


// Display submissions on submissions.html
let submissions = JSON.parse(localStorage.getItem("contacts")) || [];
let list = document.getElementById("list");

if (list) {
    submissions.forEach((s) => {
        list.innerHTML += `<li>${s.name} - ${s.email} - ${s.message}</li>`;
    });
}
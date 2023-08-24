const registeredStudents = [];

function registerStudent() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const resultElement = document.getElementById("result");
    const registrationForm = document.getElementById("registration-form");
    const cityMessage = document.getElementById("city-message");

    if (fullName && email) {
        // Check if the user is already registered
        if (isRegistered(email)) {
            resultElement.textContent = "You are already registered with this email.";
            resultElement.classList.remove("hidden");
            cityMessage.classList.add("hidden");
            registrationForm.classList.add("hidden");
        } else {
            const cities = ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"];
            const randomIndex = Math.floor(Math.random() * cities.length);
            const randomCity = cities[randomIndex];

            registeredStudents.push({ fullName, email });
            resultElement.classList.add("hidden");
            cityMessage.textContent = "Congratulations " + fullName + "! You are registered for the exam in " + randomCity + ".";
            cityMessage.classList.remove("hidden");
            registrationForm.classList.add("hidden");
        }
    } else {
        resultElement.textContent = "Please fill in all the fields.";
        resultElement.classList.remove("hidden");
        cityMessage.classList.add("hidden");
    }
}

function isRegistered(email) {
    return registeredStudents.some(student => student.email === email);
}

// Selectors
const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submit");

// Regex for email validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Helper function for validation
function validateInput(input, minLength, errorMsg, regex = null) {
    const value = input.trim();
    if (!value || value.length < minLength || (regex && !regex.test(value))) {
        alert(errorMsg);
        return false;
    }
    return true;
}

// Submit handler function
function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const isFullNameValid = validateInput(formData.get("fullname"), 3, "Please enter your full name");
    const isEmailValid = validateInput(formData.get("email"), 3, "Please enter a valid email", emailRegex);
    const isZipValid = validateInput(formData.get("zip"), 5, "Please enter your zip code");
    const isCountryValid = validateInput(formData.get("country"), 3, "Please enter your country");

    if (!isFullNameValid || !isEmailValid || !isZipValid || !isCountryValid) return;

    const data = {
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        zip: formData.get("zip"),
        country: formData.get("country")
    };

    console.log(data);
}

// Event listener
submitBtn.addEventListener("click", handleSubmit);

const form = document.querySelector("#uploadForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const title = document.querySelector("#title");
const titleError = document.querySelector("#titleError");
const price = document.querySelector("#price");
const priceError = document.querySelector("#priceError");
const success = document.querySelector("#success");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 0) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (checkLength(title.value, 0) === true) {
        titleError.style.display = "none";
    } else {
        titleError.style.display = "block";
    }

    if (checkLength(price.value, 0) === true) {
        priceError.style.display = "none";
    } else {
        priceError.style.display = "block";
    }

    if (checkLength(firstName.value, 0) === true && checkLength(lastName.value, 0) === true && checkLength(title.value, 0) === true && checkLength(price.value, 0) === true) {
        success.style.display = "block";
    } else {
        success.style.display = "none";
    }

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}


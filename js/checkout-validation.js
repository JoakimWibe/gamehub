const form = document.querySelector("#deliveryForm");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const zipCode = document.querySelector("#zipCode");
const zipCodeError = document.querySelector("#zipCodeError");
const success = document.querySelector("#success");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(address.value, 9) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (checkLength(zipCode.value, 3) === true) {
        zipCodeError.style.display = "none";
    } else {
        zipCodeError.style.display = "block";
    }

    if (checkLength(address.value, 9) === true && checkLength(zipCode.value, 3) === true) {
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

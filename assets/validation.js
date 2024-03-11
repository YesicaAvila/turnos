const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const dateInput = document.getElementById("date");
const hourInput = document.getElementById("hour");
const emailInput = document.getElementById("email");
const telInput = document.getElementById("phone");
const radioInput = document.querySelectorAll('input[name="quantity"]');
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
const aboutInput = document.getElementById("message");



const checkTextInput = (input) => {
    let valid = false;
    const content = input.value.trim();
    if (isEmpty(content)) {
        showError(input, "*El nombre es obligatorio")
    } else {
        clearError(input)
        valid = true
    }
    return valid
};

const checkMail = () => {
    let valid = false;
    const emailValue = emailInput.value.trim();
    if (isEmpty(emailValue)) {
        showError(emailInput, "*El mail es obligatorio");
    } else if(!isEmailValid(emailValue)) {
        showError(emailInput, "*El email no es valido" );
    } else {
        clearError(emailInput);
        valid = true
    }
    return valid;
};

const checkPhone = () => {
    let valid = false;
    const phoneValue = telInput.value.trim();
    if (!isPhoneValid(phoneValue)) {
        showError(telInput, "*El teléfono no es valido")
    } else {
        clearError(telInput)
        valid = true;
    }
    return valid;
};

const checkDate = () => {
    let valid = false
    const dateValue = dateInput.value;
    if (!isValidDate(dateValue)) {
        showError(dateInput, "*La fecha ingresada no es valida");
    } else {
        clearError(dateInput);
        valid = true;
    }
    return valid;
};

const isValidForm = () => {
    const isValidName = checkTextInput(nameInput);
    const isValidSurname = checkTextInput(surnameInput);
    const isValidPhone = checkPhone();
    const isValidEmail = checkMail();
    const isValidDate = checkDate();
    return (
            isValidName && isValidSurname && isValidPhone &&
            isValidEmail && isValidDate
        );
};

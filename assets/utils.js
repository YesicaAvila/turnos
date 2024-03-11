function padTo2Digits (num) {
    return num.toString().padStart(2, "0")
}
// padToStart: tiene que tener un minimo de dos espacio sino agrega el 0.
// "11"=> "11"
// "1"=> "01"
// ""=> "00"

const getNextDay = () => {
    let tomorrow = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);

    return tomorrow;
};

const getTomorrowDate = () => {
    let year = getNextDay().getFullYear();
    let day = getNextDay().getDate();
    let month = getNextDay().getMonth() + 1;

    return `${year}-${padTo2Digits(month)}-${padTo2Digits(day)}`
};


const isEmpty = (value) => {
    return !value.length;
};

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.add("error")
    const error = formField.querySelector("small");
    error.textContent = message;
};

const clearError = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    const error = formField.querySelector("small");
    error.textContent= "";
};

const isEmailValid = (email) => {
    const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    return re.test(email)
};

const isPhoneValid = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone)
};

const isValidDate = (date) => {
    const currentDate = new Date();
    const turnDate = new Date(date);

    turnDate.setHours(currentDate.getHours());
    turnDate.setMinutes(currentDate.getMinutes());
    turnDate.setSeconds(currentDate.getSeconds());

    turnDate.setDate(turnDate.getDate() +1);

    return date.length && currentDate < turnDate;
};


// "2022-12-01"
// [("2022", "12", "01")]
// [("01", "12", "2022")]
// "01/12/2022"

const formatDate = (date) => {
    const splitDate = date.split("-").reverse().join("/");
    return splitDate;
};

const getRadioValue = (inputs) => {
    const checkedInput = [...inputs].find(
        (input) => {
            return input.checked
        });
    return checkedInput.value;
};


const getCheckedOptions = (inputs) => {
    const checkedOptions = [...inputs]
        .filter((input) => {
            return input.checked;
        })
        .map((opt) => {
            return opt.value;
        });
    return checkedOptions;
};

setDateInterval = () => {
    dateInput.value = getTomorrowDate();
    dateInput.min = getTomorrowDate();
    // Setea el tope de la fecha
    dateInput.max = getNextDay().getFullYear() + "-12-31";
};

const setBackgroundCard = (quantity) => {
    return quantity === "Más de 10"
        ? "black-card"
        : quantity === "Entre 5 a 10"
        ? "carmesi_card"
        : "light-card";
};

const setCardImg = (quantity) => {
    return quantity === "Más de 10"
        ? "./assets/img/server.png"
        : quantity === "Entre 5 y 10"
        ? "./assets/img/laptop.png"
        : "./assets/img/lupa.png"
};

const setCardImgClass = (quantity) => {
    return quantity === "Más de 10"
        ? "server.png"
        : quantity === "Entre 5 y 10"
        ? "laptop.png"
        : "lupa.png";
};

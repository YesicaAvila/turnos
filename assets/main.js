const cardsContainer = document.getElementById("card-container");
const form = document.getElementById("form");

let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

const saveLocalStorage = () => {
    localStorage.setItem("agenda", JSON.stringify(agenda));
};

const saveData = () => {
    agenda = [
        ...agenda,
        {
            id: agenda.length + 1,
            name: nameInput.value,
            surname: surnameInput.value,
            phone: telInput.value,
            email: emailInput.value,
            date: formatDate(dateInput.value),
            time: hourInput.value,
            quantity: getRadioValue(radioInput),
            extras: getCheckedOptions(checkboxInputs),
            about: aboutInput.value,
        }
    ]
};

const renderTurn = (turn) => {
    const { id, name, surname, phone, email, date, time, quantity, extras } = turn

    return `
        <div class="card ${setBackgroundCard(quantity)}">
            <div class="card_left">
                <h2 class="card_title">Orden: ${id} - ${name} ${surname} </h2>
                <p class="card_qty">${quantity}</p>
                <p class="card_extras">
                    Extra: ${extras}
                </p>
                <div class="tags">
                    <span class="card_hour ">${time} hs</span>
                    <span class="card_date ">${date}</span>
                </div>
            </div>
            <div class="card_right">
                <i class="fa-solid fa-envelope"></i>
                <i class="fa-solid fa-phone-flip"></i>
                <img src="${setCardImg(quantity)}"
                    class="card_img ${setCardImgClass} 
                    alt=""
                />
            </div>
        </div>
    `
};

const renderAgenda = () => {
    cardsContainer.innerHTML = agenda.map ((turn) => {
        return renderTurn(turn)
    }).join("");
};

const submitForm = (e) => {
    e.preventDefault();
    if (isValidForm()) {
        saveData()
        alert("El turno se ha cargado exitosamente")
        form.reset();
        saveLocalStorage();
        renderAgenda();
        setDateInterval();
    }
};

const init = () => {
    renderAgenda();
    window.addEventListener("DOMContentLoaded", setDateInterval);
    form.addEventListener("submit", submitForm);
};

init();






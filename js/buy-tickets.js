document.getElementById("buy-ticket-btn").addEventListener('click', function () {
    const ticketContainer = document.getElementById("ticket-details-container");
    ticketContainer.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("seat-select-container").addEventListener('click', function (event) {
    let clickedSeat = event.target.id;
    const seatField = document.getElementById(clickedSeat);
    seatField.style.backgroundColor = "#1DD100";
    seatField.style.color = "black";
    seatField.disabled = true;
    let seatValue = seatField.innerText;
    newLiField("seat-number", seatValue);
    newLiField("economy-field", "Economy");
    newLiField("per-seat-price", 550);
});
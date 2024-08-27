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
    const seatLeftField = document.getElementById("seats-left");
    const seatLeftValue = seatLeftField.innerText;
    const seatLeft = parseInt(seatLeftValue);
    seatLeftField.innerText = seatLeft - 1;
    const seatCountField = document.getElementById("seat-counter");
    let seatCountValue = seatCountField.innerText;
    let seatCount = parseInt(seatCountValue);
    seatCountField.innerText = seatCount + 1;
    const totalPriceField = document.getElementById("total-price");
    const seatPurchased = seatCount + 1;
    const totalPrice = seatPurchased * 550;
    totalPriceField.innerText = totalPrice;
    const grandTotalField = document.getElementById("grand-total");
    grandTotalField.innerText = totalPrice;
    removeDisable("name-input");
    removeDisable("number-input");
    removeDisable("email-input");
    const number = document.getElementById("number-input").value;
    const num = parseInt(number);
    document.getElementById("number-input").addEventListener('keyup', function () {
        removeDisable("submit-btn");
    })
    if (seatCount >= 3) {
        removeDisable("discount-coupon-field");

        document.getElementById("discount-coupon-field").addEventListener('keyup', function () {
            const discount15Field = document.getElementById("discount15");
            const discount15 = discount15Field.innerText;
            const discount20Field = document.getElementById("discount20");
            const discount20 = discount20Field.innerText;
            const couponInputField = document.getElementById("discount-coupon-field");
            const discountCoupon = couponInputField.value;
            if (discountCoupon === discount15 || discountCoupon === discount20) {
                removeDisable("coupon-apply-btn");
                document.getElementById("discount-coupon-field").disabled = true;
                const discountField = document.getElementById("discount");
                document.getElementById("coupon-apply-btn").addEventListener("click", function () {
                    if (discountCoupon === discount15) {
                        const totalDiscount = totalPrice * .15;
                        discountField.innerText = totalDiscount;
                        grandTotalField.innerText = totalPrice - totalDiscount;
                    }
                    else {
                        const totalDiscount = totalPrice * .20;
                        discountField.innerText = totalDiscount;
                        grandTotalField.innerText = totalPrice - totalDiscount;
                    }
                });

            }
        });
        document.getElementById("seat-select-container").classList.add("hidden");
    }
});
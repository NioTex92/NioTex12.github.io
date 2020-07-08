function calcAmount() {
let price = 1200;
let amountInput = document.querySelector("input[name='amount-input']");
let amount = parseInt(amountInput.value) * price
alert("FIzetendő: " + amount + "Ft")
 }
function calcAmount() {
let price = 1200;
let amountInput = document.querySelector("input[name='amount-input']");
let amount = parseInt(amountInput.value) * price
alert("FIzetendő: " + amount + "Ft")
 }

 function calcAmount() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amount = parseInt(amountInput.value) * price

    showAmount.innerHTML = amount;
     }
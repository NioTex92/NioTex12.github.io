<<<<<<< HEAD
function calcAmount() {
    let price = 1000;
    let amountinput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amount = parseInt(amountinput.value) * price;

    showAmount.innerHTML = amount;
=======
function calcAmount() {
    let price = 1000;
    let amountinput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amount = parseInt(amountinput.value) * price;

    showAmount.innerHTML = amount;
>>>>>>> b7da88e1e541b6b7d00af4b5a94a6dbce0a9e3ac
}
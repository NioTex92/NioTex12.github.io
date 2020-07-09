function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
    
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
     
 
    if ( amountNumber > 10 ) {
       alert("Maximum 10 termék");
       return;
    } else if ( amountNumber < 1 ) {
       alert("Minimum 1 termék");
    } else {
       let amount = amountNumber * price;
       showAmount.innerHTML = amount;
    }
 
 
 }


 // Nevek
 let n;
 let nrOfProducts;
 let numberOfProducts;

 // ne legyen a név félre vezető
 function multipler(x, y) {
    return x * y
 }


 // Ne legyen a név félrevezető
 let IO; let l0

 // Komment: 1 soros

 // Unncessarry: This function gives roles of users
 function getUserRoles(user , roles, id) {
    if ( user,admin ) {
        return user.roles;
    } else {
        retuen user.roleObject
    }
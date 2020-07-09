// Global Scope (Globális szkóp)
var globalName = "Joe"

function somthing() {
    globalName = "Piroska";
    console.log(globalName);
}
somthing();

console.log(globalName);


let name = "Jenő";

{
    let name = "Juliska";
    console.log(name);
}

console.log(name);
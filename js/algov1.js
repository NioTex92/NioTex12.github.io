//összegzés//
let numericArray = [1, 3, 5, 4, 9, 8, 7];
let sum = 0
for (let i = 0; i < numericArray.length; i++) {
    sum+= numericArray[i];
}
console.log("Sum: ", sum);

//összeadás//
let db= 0;
for (let i = 0; i < numericArray.length; i++) {
        if (numericArray[i] % 2 == 0) {
                db++;
        
        }

}
console.log("Even numbers: ", db)   

//szélső érték//
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}
console.log("The biggest element: ", biggest);

let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] < smallest) {
        smallest = numericArray[i];
    }
}
console.log("The smallest element: ", smallest);

//Eldöntés feltétele: //

let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] == 5) {
        contains = true
    }
}
console.log("The array contains 5", contains);
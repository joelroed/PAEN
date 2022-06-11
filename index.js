// const number = prompt("Enter number: ")

// if(number % 2 == 0) {
//     console.log("The number is even");
// }
// else {
//     console.log("The number is odd")
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(checkEven);

function checkEven(number) {
    if(number % 2 === 0)
    console.log(number);
}




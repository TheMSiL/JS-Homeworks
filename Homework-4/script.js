                                                                    // First condition
function getSum(a, b) {
let sumResult = a + b;

console.log(sumResult);
}

getSum(1, 2);
getSum(3, 4);
getSum(5, 6);

                                                                    // Second condition

let sum = (a, b) => a + b;

console.log(sum(1, 2));
console.log(sum(3, 4));
console.log(sum(5, 6));

                                                                    // First Exercise


let userName = prompt('Вкажіть ваше ім’я');
let userAge = prompt('Вкажіть ваш вік');

function showGreeting () {
   let firstGreeting = 'Привіт,' + ' ' + userName;
   let secondGreeting = 'Добрий день,' + ' ' + userName;

   if (userAge >= 30) {
    alert(secondGreeting);
   } else {
    alert(firstGreeting);
   }
}

showGreeting ();


                                                                    Second Exercise


function getExponent(number, exponent = 2) {
    return number ** exponent;
}

getExponent (12, 4);
getExponent (12);


                                        // Первое задание
const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';
let isAuthSuccess = false;

const authorize = () => {
    let userLogin; 
    let userPassword;
    let userTries = 3;

    do {
        userLogin = prompt ('Логин:');
        if (!userLogin && userTries > 0) {
            alert('Введите логин у вас осталось ' + userTries + ' попыток');
            userTries--;
            continue
        } else if (userLogin !== LOGIN && userTries > 0){
            alert ('Логин неверный, у вас осталось ' + userTries + ' попыток');
            userTries--;
            continue
        } else if (!userLogin && userTries <= 0 || userLogin !== LOGIN && userTries <= 0) {
            alert ('Попытки исчерпаны');
            break
        }
        
        userPassword = prompt ('Пароль:');
        if (!userPassword && userTries > 0) {
            alert('Введите пароль у вас осталось ' + userTries + ' попыток');
            userTries--;
            continue;
        } else if (userPassword !== PASSWORD && userTries > 0){
            alert ('Пароль неверный, у вас осталось ' + userTries + ' попыток');
            userTries--;
            continue
        } else if (!userPassword && userTries <= 0 || userPassword !== PASSWORD && userTries <= 0) {
            alert ('Попытки исчерпаны');
            break
        }

        if (userPassword === PASSWORD && userLogin === LOGIN){
            isAuthSuccess = true;
            alert ('Welcome!');
        }
    } while (!isAuthSuccess); 
};
 
// authorize ();

                                                        // Вывести простые числа в заданном промежутке

                                                        // Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

                                                        // Реализуте функцию, которая будет принимать 2 аргумента (от какого до какого числа искать простые числа)
                                                        // Поочередно выведите в консоль простые числа из данного промежутка.
                                                        // Например:

                                                        // для промежутка 1 и 10 результат будет 2,3,5,7
                                                        // для 20 и 100 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

                                            // Второе задание
// const getNumber = () => {
//     // let a = Number (prompt('First number :'));
//     // let b = Number (prompt('Second number :'));
    
        
//    }
// }

// getNumber ();

let n = 10;

outFor:
for (let i = 2; i <= n; i++) {

    for (let j = 2; j < 1; j++) {
        if (i % j == 0) continue outFor;
    }

    console.log(i);
}













// const drawPyramid = (height) => {
//     for (let i = 0; i < height; i++){
//         let spacesBefore = '';
//         let stars = '';

//         for (let j = 0; j < 2 * i + 1; j++){
//             stars += '*';
//         }

//         for (let k = 0; k < height - i -1; k++) {
//             spacesBefore += ' ';
//         }

//         console.log(spacesBefore + stars)
//     } 
// };

// const desireHeight = Number(prompt('Какая высота пирамиды?'));

// drawPyramid (desireHeight);
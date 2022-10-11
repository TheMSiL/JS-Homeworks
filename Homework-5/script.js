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
 
authorize ();

                                            // Второе задание

let i = Number (prompt('Первое число:'));  
let f = Number (prompt('Второе число:'));

const showNaturalNumbers = (i,f) => {
    if (i === 1) {
        i = 2;
    };

    if(f > 1) {
    nextVar:
    for (;i <= f; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0){
            continue nextVar;
            } 
        }
        console.log(i); 
        }
    }
}

showNaturalNumbers(i,f);
const firstNumber = Number(prompt('Вкажіть перше число'));
const secondNumber = Number(prompt('Вкажіть друге число'));
    if (firstNumber > secondNumber) {
        alert ('Перше число більше');
    } else if (firstNumber == secondNumber) {
        alert ('Числа рівні');
    } else {
        alert ('Друге число більше');
    }

    // Первое задание

const firstNum = Number(prompt('Вкажіть перше число'));
const secondNum = Number(prompt('Вкажіть друге число'));
const mathOperation = (prompt('Вкажіть математичну дію яку бажаєте виконати на вибір: + - / *'));
    switch (mathOperation) {
        case '+':
            alert(firstNum+secondNum);
            break;
        case '-':
            alert(firstNum-secondNum);
            break;
        case '*':
            alert(firstNum*secondNum);
            break;
        case '/':
            alert(firstNum/secondNum);
            break;
        default:
            alert('Перевірте чи правильно ви вказали число чи математичну дію');
    }

    // Второе задание

let permissiveAge = Number(prompt('Вкажіть ваш вік'));
let adultsAccomp = confirm('Чи супроводжують вас дорослі?');

    if (permissiveAge > 18 && permissiveAge < 60 || permissiveAge >= 12 && permissiveAge <= 18 && adultsAccomp || permissiveAge >= 60 && permissiveAge <=80 && adultsAccomp) {
        alert ('Welcome');
    } else if (permissiveAge >= 12 && permissiveAge <= 18 || permissiveAge >= 60 && permissiveAge <=80){
        alert ('Only with adult')
    } else {
        alert ('Аccess is denied')
    }

    // Третье задание
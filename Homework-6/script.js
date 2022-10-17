                                                                            // Первое задание

const authorize = () => {

let userData;
let userPassword;
let spaceIndex;
let authorizeSuccess = false;


do {
    userData = prompt('Введите ваше имя и фамилию через пробел');
    
    if (!userData){
        alert('Введите ваши данные');
        continue
    } else {
        alert ('Ваши данные сохранены');
    }

    spaceIndex = userData.indexOf(' ');
    if (spaceIndex === -1) {
        alert ('Вы забили использовать пробел между именем и фамилией!');
        continue
    }
    
    userPassword = prompt('Введите ваш пароль');
    
    if (!userPassword) {
        alert ('Введите ваш пароль');
        continue
    } else if (userPassword == Number(userPassword) || userPassword == userPassword.toLowerCase() || userPassword == userPassword.toUpperCase() || userPassword.length < 6) {
        alert ('В пароле должны содержаться цифры, буквы разного регистра и длинна пароля должна быть больше 6 символов. Например: AbCxx12 '); 
        continue
                                    // чуть-чуть улучшил условие, чисто для проверки содержит ли чисто цифры
    } else {
        alert ('Ваш пароль сохранен!');
        break
    }
    
    
} while (!authorizeSuccess);

const showFixUserData = (userData) => {
    let userName = userData.slice(0, spaceIndex);
    let userNameFix = userName.chartAT(0).toUpperCase() + userName.slice(1).toLowerCase();
    let userSurname = userData.slice(spaceIndex + 1);
    let userSurnameFix = userSurname.chartAT(0).toUpperCase() + userSurname.slice(1).toLowerCase();

    

    alert (`Добро пожаловать, ${userNameFix} ${userSurnameFix}!`);
}

showFixUserData();

}

authorize ();

                                                                    // Второе задание

const getRandomNumber = (min, max) => {
    min = Math.ceil(prompt('First number:'));
    max = Math.floor(prompt('Second number:'));
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  console.log(getRandomNumber ());
  console.log(getRandomNumber ());
  console.log(getRandomNumber ());
  console.log(getRandomNumber ());
  console.log(getRandomNumber ());




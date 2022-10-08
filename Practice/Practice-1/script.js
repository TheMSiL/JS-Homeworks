const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e'

const authorize = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;

    do {
        userLogin = prompt('Логин:');
        if(!userLogin){
            alert('Введите логин');
            continue;
        }

        userPassword = prompt('Пароль:');
        if(!userPassword) {
            alert('Введите пароль');
            continue
        }

        if(userPassword === PASSWORD || userLogin === LOGIN) {
           isAuthSuccess = true;
        } else ('Данные неверны!')

    } while (!isAuthSuccess)

    alert('Welcome');
}

authorize()


const drawPyramid = (height) => {
    for(let i= 0; i < height; i++){
        let spacesBefore = '';
        let stars = '';

        for(let j = 0; j < 2 * i +1; j++) {
            stars += '*';
        }

        for (let k = 0; k < height - i - 1; k++){
            spacesBefore += ' ';
        }

        console.log(spacesBefore+stars);
    }
};

const desiredHeight = Number(prompt('Какая высота пирамиды?'));
drawPyramid(desiredHeight)
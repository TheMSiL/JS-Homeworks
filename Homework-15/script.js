//* Задание 1 
//* Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:
//* total, из объекта paging, который вложен в объект meta;
//* значение is_active, которое принадлежит первому объекту в массиве data. Переименуйте переменную в isActive.

const response = {
  data: [
    {
      username: "samuel",
      is_active: true,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "john",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "peter",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
  ],
  meta: {
    paging: {
      current: 1,
      next: 2,
      prev: null,
      total: 14,
      per_page: 3,
    },
  },
};


let {
  data : [{is_active:isActive}],
  meta:{
  paging: {total}
}} = response;


//* Задание 2

//* Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:
//! name
//! surname
//! все остальные свойста (height, age) должны быть присвоены объекту parameters.


const user = {
  name: "gabriel",
  surname: "brown",
  age: 17,
  height: 178,
};

let {name,surname, ...parameters} = user;
console.log(parameters);

//* Задание 3

//* Переделайте функцию max таким образом, что бы она принимала любое количество аргументов (при условии, что все они являются числами, и возвращала максимальное из них). P.S. В данной задаче нельзя использовать Math.max()

const findMax = (...numbers) => {
  let max = 0;

  numbers.forEach ((number) => {
    if (number > max) {
      max = number
    }
  })

  return max
}

let result = findMax(1,3,56,5,213)
console.log(result);


//* Задание 4

//* Переделайте функцию createMessage таким образом, что бы на вход передавались не 4 аргумента, а один объект. 
//* Деструктузизуйте его в прямо в аргументах или в теле функции, и присвойте значения по умолчанию:

//! Guest для поля author
//! текущую дату для поля time


const createMessage = (data) => {
 const {author = 'guest', text, receiver, time = new Date ()} = data;
  return `From ${author} to ${receiver}: ${text} (${time.toLocaleDateString()})`;
};

const message = createMessage({
  receiver: 'John',
  text: 'Hi',
});
console.log(message);


//* Задание 5

//* Напишите регулярное выражение, которое находит подстроки с такими свойствами:

//! начинается с буквенного символа
//! заканчивает на буквенный символ
//! между первым и послденим символом находятя только числовые символы
//! для поиска используйте метод match

let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
let strValid = /\w\d+\w/gi;
console.log(str.match(strValid));

//* Напишите регулярное выражение для валидации домена (адреса сайта)

//! Валидные домены: ex.ua, google.com, yandex.ru, site.com.ua, my-page.com
//! то есть, доменные имена начинаются с любого количества буквенных символов, чисел, символов - _ ., заканчиваются подстрокой, длина которой не менее 2 символов. Начало и конец обязательно разделены точкой
//! используйте метод test

let str2 = 'ex.ua, google.com, yandex.ru, site.com.ua, my-page.com';
let str2Valid = /([a-z,_-]+).([\w]{2,})/gi;

console.log(str2.match(str2Valid));
console.log(str2Valid.test(str2));

//* Напишите регулярное выражаение, которое проверяет строку:
//! строка не должна содержать ничего кроме числовых символов
//! длина строка должна быть не менее 12, но можно и больше

let numValid = /(\d){12,}/gi;
// // !1.1
// let arr = [1, 2,-10, -2, 7].map((a,b) => a > b);
// console.log(arr);

// const giveBolian = (arr) => arr.map((num) => num > 0);

// const result = giveBolian([1, 2,-10, -2, 7]);
// console.log(res);

// !1.2
const users = [
   {
     name: 'Sam',
     role: 'admin',
     age: 25,
   },
     {
     name: 'Peter',
     role: 'admin',
     age: 16,
   },
     {
     name: 'Pablo',
     role: 'admin',
     age: 32,
   },
     {
     name: 'Enrico',
     role: 'client',
     age: 43,
   },
     {
     name: 'Mary',
     role: 'client',
     age: 34,
   },
     {
     name: 'Katerine',
     role: 'guest',
     age: 17,
   },
 ]

 const adultAdmins = users.filter(item => item.role === 'admin' && item.age >= 18).map(item => item.name)
 console.log(adultAdmins);
 
//  const filterAdults = (dataArr) => {
//     return dataArr
//     .filter((user) => user.age >= 18 && user.role === 'admin') 
//     .map((user) => user.name)
//  }
 
//  const adults = filterAdults(users);
//  console.log(adults);


// //!1.3
const numbers = [1, 10, 17, 24, 45];

let middle = numbers.reduce((num, item) => num + item / numbers.length, 0);
console.log(middle);

// !2
const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};

const forEachEmul = (array, logger) => {
   for (let num of array) {
      logger(num,array.indexOf(num), array)
   }
}
// const each = (array,cb) => {
//    for (let element = array[0], index = 0; index < array.length; element++, index++) {
//          cb(element, index, array)
//    }
// }
// each([1,2,3,4,5,6], logger)

forEachEmul([1, 2, 3, 4, 5,], logger)

const mapEmul = (arr, increment) => {
   let arr1 = [];

   for (let num of arr) {
      arr1.push(increment(num))
   }
   return arr1
}

console.log(mapEmul([1,2,3,4,5], increment)); 

const filterEmul = (arr, isNegative) => {
   arr2 = [];

   for(let num of arr) {
      if(isNegative(num)) {
         arr2.push(num)
      }
   }

   return arr2
}

console.log(filterEmul([-1,2,-4,12,-8], isNegative));

// !3

const data = [
   {
     name: "John",
     age: 24,
     position: "senior",
     isActive: false,
   },
   {
     name: "Peter",
     age: 33,
     position: "middle",
     isActive: false,
   },
   {
     name: "Sam",
     age: 29,
     position: "junior",
     isActive: true,
   },
   {
     name: "Mary",
     age: 24,
     position: "middle",
     isActive: false,
   },
   {
     name: "Steve",
     age: 23,
     position: "middle",
     isActive: true,
   },
   {
     name: "Kate",
     age: 31,
     position: "middle",
     isActive: false,
   },
   {
     name: "Sally",
     age: 19,
     position: "junior",
     isActive: false,
   },
   {
     name: "Jack",
     age: 19,
     position: "middle",
     isActive: true,
   },
 ];
 

 const filterData = ((array, obj) => {
   for (let key in obj) {
      array = array.filter((argument) => argument[key] === obj[key])
   }
   return array
})

const result = filterData(data, { age: 19, position: "junior" });
console.log(result);


// const filterData = (arr, objectToSearch) => {
//    let result = arr.filter(item => {
      
//       return Object.keys(objectToSearch).every(key => {
//          return item[key] === objectToSearch[key]
//       })
//    })
//    return result
// }

// console.log(filterData (data, {age: 19, position: "junior"})); 


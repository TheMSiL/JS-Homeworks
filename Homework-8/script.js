                                                      // !Первое задание
                                                      
                                                      
let arr = [];

function getNumber (arr) {

let num = 0;
for (let truth of arr) {
   if (truth === true)  {  
      num++
   }
}
   console.log(num);
}

getNumber([true, false, false, true, false]);
getNumber([false, false, false, false]);
getNumber([]);

                                                      // !Второе задание

let object = {};
function getOccurrencesCount (array) {
   for (let elem of array) {
      if (object[elem] === undefined) {
         object[elem] = 1;
      } else {
         object[elem]++;
      }
   }
   return object
}
console.log(getOccurrencesCount(["a", "v", "a", "b", "b"]));
console.log(getOccurrencesCount(["apples","oranges",
"pears","pears","apples","oranges","oranges","pears",]));

                                                      // !Третье задание

const findExcess = (arrAy) => {

let superfluous = 0;
let arr1 = [];
let arr2 = [];
   
for (let num of arrAy) {

   if (num % 2 !== 0) {
      arr1.push(num);
   } else {
      arr2.push(num);
   }

   if ((arr1.length === 1) && (arr1.length < arr2.length)) {
      superfluous = arr1[0];
   } else {
      superfluous = arr2[0];
   }
} 
     
return superfluous
}
      
console.log(findExcess([0, 1, 2]));// -> 1
console.log(findExcess([1, 2, 3]));// -> 2
console.log(findExcess([2, 6, 8, 10, 3])); // -> 3
console.log(findExcess([0, 0, 3, 0, 0])); // -> 3
console.log(findExcess([1, 1, 0, 1, 1])); // -> 0
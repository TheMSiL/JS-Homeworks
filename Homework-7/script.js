                                 // !Первое задание
                                 
function getTimetable () {

let timetable = {};
let time;
let task;
let end = false;
do {
   
   time = prompt ('time');
   task = prompt ('task');

   if (time == null || task == null) {
     end = true
   } else {
      timetable[time] = task;
   }
   
} while (!end)

return timetable
   
}

let shedule = getTimetable();
console.log(shedule);

getTimetable ();


                              //   !Второе задание 

const salaries = {
John: "4300.00",
Ann: "5700.40",
Pete: "4900.95",
};

function getSum (salaries) {
   
let sum = 0;

for (let employer in salaries) {
   sum += Number(salaries[employer]);
};

let result = Math.round(sum * 100) / 100;  
//             or
// let result = sum.toFixed(2);

return result;
}

console.log(getSum (salaries));

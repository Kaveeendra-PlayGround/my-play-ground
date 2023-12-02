// function myAge(age){
//     console.log(`My Age is ${age}`);
// }

// myAge(23);

// const myname = function(name){
//     console.log(`my name is ${name}`);
// }

// myname('dasun');

// const subject = () => {
//     console.log('maths');
// }

// subject();

// const subject2 = (name) => {
//     console.log(`hi ${name}`);
// }

// subject2('supun');

// const subject3 = (age) => console.log(`my age is ${age}`);

// subject3(23);

// const sum = (a,b) => a+b;

// console.log(sum(23, 5));

// const city = (city) => {
//     let out = `My city is ${city}`;
//     return out;
// }

// console.log(city('moratua'));

// setTimeout(function(){
//     console.log('hello');
// }, 4000);

// setTimeout(()=> console.log('hello'), 2000);

// setInterval(()=> console.log('hello'), 2000);

// const fact = function(n){
//     let f = 1;

//     for (let i = n ; i>1; i--){
//         f = f * i

//     }

//     return f;
// }

// const fact = (n) => {
//     let f = 1;

//     for (let i = n ; i>1; i--){
//         f = f * i

//     }

//     return f;
// }

// console.log(fact(5));

// const myMarks = (...marks) => console.log(marks);


// myMarks(20, 23, 45, 45);

const salCal = (salary, improvement = 5) => {
    let nSal = salary * ((improvement + 100)/100);
    console.log(`New salary is Rs. ${nSal} `);
}

salCal(10000 , 10);



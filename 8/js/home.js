// let arr = ['1', '2', '3'];
// let [one, two, three] = arr;

// console.log(one);
// console.log(two);
// console.log(three);

//----------------------------

// let a = () => {
//     return [1,3,2];
// }

// let [one, two] = a();

// console.log(one);
// console.log(two);

// function myFunction(w, x, y, z) {
//     console.log(w + x + y + z);
//   }
//   var args = [1, 2, 3];
//   myFunction.apply(null, args.concat(4));

// var arr = ["One", "Two", "Five"];

// arr.splice(2, 0, "Three");
// arr.splice(3, 0, "Four");
// console.log(arr);


// const user = {
//     first : 'Lahiru',
//     last : 'Perera',
//     age : 25
// }

// const fname = user.first;
// const lname = user.last;

// console.log(`My Name is ${fname} ${lname}`);

const std = {
    name : 'chamara silva',
    degree : 'Bsc Eng',
    age : 25,
    subjects : ['java', 'os', 'comp design', 'networking'],
    gpa : {
        first : 3.8,
        second : 3.6,
        third : 3.4
    }
}

const {name} = std;
console.log(`my name is ${name}`);

const{degree:d, age:a} = std;

console.log(`My degree is ${d} and my age is ${a}`);

const {subjects} = std;

for (const i of subjects) {
    console.log(i);
}

const {gpa:{first}} = std;

console.log(first);
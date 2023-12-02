// const Elm1 = document.querySelector('body');
// Elm1.style.backgroundColor = 'red';

const smbl1 = Symbol();
//console.log(typeof(smbl1));

let fname = Symbol('fname');
let lname = Symbol('lname');

console.log(fname === lname);

console.log(fname);
console.log(lname);

console.log(fname.toString());

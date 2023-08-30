// const foo = (x) => {
//     console.log("arrow function");
//     return x;
// };

// function foo() {
//     console.log("arrow function");
// }

// const foo = x => x;
// console.log(foo("arrow"));

// const foo = (x,y) => x + y;
const foo = (x,y) => {
    console.log("2줄 이상");
    return x + y;
}

console.log(foo(1,5));
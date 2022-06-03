// console.log('first');
// setInterval(() => {
//     console.log('tik tik tik tik')
// }, 3000)

let seconds = 0;

const timeId = setInterval(()=>{
    // seconds++;
    console.log(++seconds);
    if (seconds > 15) {
        clearInterval(timeId);
    }
}, 1000)

console.log('second');
setTimeout(() =>console.log("I am Superman"),1000)
console.log("I am superwoman");
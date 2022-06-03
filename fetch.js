console.log('1111111111');
setTimeout( () => console.log('aaaaaa'), 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log('222222222222221');
// for (let i = 0; i < 40000; i++) {
//     console.log(i);
// }
const fn = (n) => {
    const fib =(num) =>{
        return num <= 1 ? num : fib(num - 1) + fib(num - 2);
    }
    return fib(n)
}

console.log('start')
console.log(fn(40))
console.log('end')

// const promiseInter =  (n) => {
//      return new Promise(resolve => {
//         resolve(fn(n))
//     }).then((data) => data)
// }

// const endFn = async () =>{
//     const start = performance.now()
//     console.log(start)
//      const data = [
//          fn(44),
//          fn(44),
//          fn(44),
//          fn(44),
//      ]
//     console.log(data)
//     console.log(performance.now() - start)
// }
//
//
//
//
// endFn()
// console.log('some')
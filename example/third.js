const fn = (n) => {
    const fib =(num) =>{
        return num <= 1 ? num : fib(num - 1) + fib(num - 2);
    }
    return fib(n)
}

// const start = performance.now()
// console.log(start,'start')
// console.log(fn(42))
// console.log(performance.now() - start,'end')

//

// const hardFibonacciCount =  () =>{
//     const start = performance.now()
//     console.log(start)
//      const data = [
//          fn(40),
//          fn(40),
//          fn(40),
//          fn(40),
//          fn(40),
//          fn(40),
//          fn(40),
//          fn(40),
//      ]
//     console.log(data)
//     console.log(performance.now() - start)
// }
//
//
// hardFibonacciCount()
// console.log('end')


// const promiseFibonacci =  (n) => {
//     return new Promise(resolve => {
//         resolve(fn(n))
//     }).then((data) => data)
// }
//
// const hardFibonacciPromiseCount = async () =>{
//     const start = performance.now()
//     console.log(start)
//     const data = await Promise.all([
//         promiseFibonacci(40),
//         promiseFibonacci(40),
//         promiseFibonacci(40),
//         promiseFibonacci(40),
//         promiseFibonacci(40),
//         promiseFibonacci(40),
//         promiseFibonacci(40),
//         promiseFibonacci(40),
//     ])
//     console.log(data)
//     console.log(performance.now() - start)
// }
//
//
// hardFibonacciPromiseCount()
// console.log('end')

//
// const hardFibonacciPromiseCount = async () =>{
//     const start = performance.now()
//     console.log(start)
//     const fibFunc = new Promise((res)=>{
//         setTimeout(()=>{
//             res(fn(44))
//         },0)
//     }).then(data => data)
//     const data = await Promise.all([
//         fibFunc,
//         fibFunc,
//         fibFunc,
//         fibFunc,
//         fibFunc,
//         fibFunc,
//         fibFunc,
//         fibFunc,
//     ])
//     console.log(data)
//     console.log(performance.now() - start)
// }
//
//
// hardFibonacciPromiseCount()
// console.log('end')
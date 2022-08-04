const perfomMesaure = (fn) => {
    const start = performance.now()
    console.log('start', start)
    for (let i = 0; i < 32; i++) {
        fn(i, start)
    }
    console.log('end', performance.now())
}


// const simpleCycle = (i, start) => {
//     console.log(`${i + 1} ${performance.now() - start}`)
// }
// perfomMesaure(simpleCycle)


// const timeoutCycle = (i, start) =>{
//         setTimeout(() => {
//             console.log(`${i + 1} ${performance.now() - start}`)
//         }, 1000)
// }
// perfomMesaure(timeoutCycle)


// const promiseCycle =(i, start) =>{
//         Promise.resolve().then(() => {console.log(`${i + 1} ${performance.now() - start}`)})
// }
// perfomMesaure(promiseCycle)


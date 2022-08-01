const start = performance.now()

console.log('start',start)
for (let i = 0; i < 32; i++) {
    setTimeout(() =>{
        console.log(`${i+1} ${performance.now() - start}`)
    },1000)
}
console.log('end', start)


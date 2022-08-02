const {
    pbkdf2,
} = require('crypto');


// const start = performance.now()

// process.env.UV_THREADPOOL_SIZE = 8

console.log('start')
for (let i = 0; i < 1; i++) {
    pbkdf2('test', 'javascript', 1000000, 64, 'sha512', (err, data) => {
        console.log('iter')
        // console.log(`${i + 1} ${performance.now() - start}`)
    })
}
console.log('finish')

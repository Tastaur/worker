// const {
//     pbkdf2,
// } = require('crypto');

const start = performance.now()


for (let i = 0; i < 32; i++) {
    setTimeout(() =>{
        console.log(`${i+1} ${performance.now() - start}`)
    },1000)
}



// process.env.UV_THREADPOOL_SIZE = 8


//     for (let i = 0; i < 32; i++) {
//         pbkdf2('test', 'javascript', 1000000, 64, 'sha512', (err, data) => {
//             console.log(data.toString('hex'))
//             console.log(`${i + 1} ${performance.now() - start}`)
//         })
//     }

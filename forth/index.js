const {Worker} = require('worker_threads')

const fibWorker = (n) =>{
    return new Promise((resolve,reject) =>{
        const worker = new Worker('./worker.js', { workerData: { n } })
       worker.on('message', (msg) =>{
           resolve(msg)
       })
        worker.on('error',  (e) => reject(e.message))
    }).then(res => res)
        .catch(err => err)
}

const main =  async () =>{
    const start = performance.now()
    console.log(start)
    const res =  await Promise.all([
        fibWorker(44),
        fibWorker(44),
        fibWorker(44),
        fibWorker(44),
    ])
    console.log(res)
    console.log(performance.now() - start)
}

main()
// console.log('some')
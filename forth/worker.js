const { parentPort, workerData } = require('worker_threads')

const fn = ({n}) => {
    const fib = (num) =>{
        return num <= 1 ? num : fib(num - 1) + fib(num - 2);
    }
    return fib(n)
}

parentPort.postMessage(fn(workerData))
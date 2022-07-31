import {useCallback, useState} from 'react'
import {fn as fib} from "../fib";

const workerHandler = (fn: Function) => {
    onmessage = (event) => {
        postMessage(fn(event.data))
    }
}

export const useWebWorker = <Payload>(fn:(payload:Payload) => void) => {
    const [result, setResult] = useState<Payload| null>(null)
    const [error, setError] = useState<string | null>(null)
    const [inProcess, setInProcess] = useState(false)

    const run = useCallback(async (value: Payload) => {
        const worker = new Worker(
            URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`]))
        )
        setInProcess(true)
        await new Promise<Payload>((resolve, reject) => {
            worker.onmessage = (event) => {
                resolve(event.data)
            }
            worker.onerror = (error) => {
                reject(error)
            }
            worker.postMessage(value)
        }).then(data=> setResult(data))
            .catch(err=>setError(err.message))
            .finally(()=> {
            worker.terminate()
            setInProcess(false)
        })

    },[fn])

    return {
        inProcess,
        result,
        error,
        run,
    }
}

export const useFibonacci = () => {
    return useWebWorker(fib)
}

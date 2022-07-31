export const fn = (n: number): number => {
    const fib =(num: number): number =>{
        return num <= 1 ? num : fib(num - 1) + fib(num - 2);
    }
    return fib(n)
}


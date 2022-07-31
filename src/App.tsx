import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useFibonacci} from "./hooks";


function App() {
    const {run, result, inProcess} = useFibonacci()
    const [input, setInput] = useState(1)
    const onRequestFibonacci = async () => {
        await run(input)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <input type="number" placeholder='fibonacci' onChange={e => setInput(Number(e.target.value))}/>
                <button disabled={inProcess} onClick={onRequestFibonacci}>request fibonacci</button>
                <h2>{inProcess ? 'load' : result}</h2>
            </header>
        </div>
    );
}

export default App;

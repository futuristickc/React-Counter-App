import React, {useState} from "react";
import ReactDOM from "react-dom";


const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div id="container">
            <div id="counter">
                <h1>{count}</h1>
                <button onClick={increment}>Increment</button>
                <h2 id="message">Click the Button!</h2>
            </div>
        </div>
    )
}


ReactDOM.render(<Counter />, document.getElementById('app'));
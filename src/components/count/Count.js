import { useState } from "react";


function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return <>
        <button onClick={increment}>
            Incrementar
        </button> <br/>
        <span>{count}</span>
    </>
}

export default Counter;
import { useRef, useState } from "react";

function Search(){

    const [task, setTask] = useState (['Apple', 'Pineapple'])

    const item = useRef();
    const srch = useRef();

    function add() {

        const name = item.current.value;
        task.push(name)
        setTask([...task])
    }


    return <>
    <input type="text" ref={item}></input>
    <button onClick={add}>Add</button>
    <ul>
    {task.map((item, i)=>
        <li  key={i}>{item}</li>
        )}
    </ul>

    <input  type="text" ref={srch}></input>
    

    </>
}

export default Search
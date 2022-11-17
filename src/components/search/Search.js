import { useRef, useState } from "react";

function Search(){

    const [task, setTask] = useState (['Apple', 'Pineapple'])
    const [searchResult, setSearchResult] = useState ([])

    const item = useRef();
    const srch = useRef()
    

    function add() {

        const name = item.current.value;
        task.push(name)
        setTask([...task])
    }

    function look(){
        let results = [];
        let sch = srch.current.value
        for(let item of task){
            if (item.toLowerCase().includes(sch.toLowerCase())) {
                results.push(item);
            }

        }
       
        setSearchResult(results)

    
        if(sch == ""){
        setSearchResult([])
    }
}


    return <>
    <input type="text" ref={item}></input>
    <button onClick={add}>Add</button>
    <ul>
    {task.map((item, i)=>
        <li  key={i}>{item}</li>
        )}
    </ul>

    <input  type="text"  onChange={look} ref={srch}></input>
    <span>{searchResult.map((item, i) =>
    <div key={i} >{item}</div>
    )}</span>
    
    

    </>
}

export default Search
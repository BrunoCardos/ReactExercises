import { useState } from "react";

function TodoApp(){

    const [list, setList] = useState([])

    const [text, setText] = useState('');

    function add(){
        list.push(text);
        const newList = [...list];
        setList(newList);

        setText('');

    
    }

    const remov = i => {
        list.splice(i, 1);
        const newList = [...list];
        setList(newList);

    }

    function handleKeyPress  (event) {
        if(event.key === 'Enter'){
            add();
        }
      }

    

    return <>
    <input type='text' placeholder='Nova Tarefa' value={text} onChange={(e) => setText(e.target.value)} onKeyPress={handleKeyPress}></input>
    <button onClick={add} className='btn' >Adicionar Tarefa</button>
    <ul>
        {list.map((task,i)=><li key={i}>{task} <button onClick={(e)=>remov(i)}>X</button></li>)}
        
    </ul>
    
    </>
}

export default TodoApp;
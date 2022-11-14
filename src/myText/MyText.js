import { useState } from "react";

function MyText(){
    
    const [text, setText] = useState('');

    return <>
        <h3>Insira o seu testo</h3>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} /> <br/>
        <span><b>Seu Texto: </b></span><br/>
        <span>{text}</span>
        
    </>
}

export default MyText;
import { useState } from "react";



function Calculator() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [op, setOp] = useState ('+');
    const [result, setResult] = useState(0);
    

      function oper(){
        let total;
          
          if(op=='+'){
            total = parseInt(num1) + parseInt(num2)
          } else if(op=='-'){
            total=parseInt(num1) - parseInt(num2)
          } else if(op=='*'){
            total= parseInt(num1) * parseInt(num2)
          } else if(op=='/'){
            total= parseInt(num1) / parseInt(num2)
          }
          setResult(total)
      }
       
 

    return <>

        <h1>Calculator</h1>

        <input type="number" value={num1}  onChange={(e) => setNum1(e.target.value)}/>
        <select value={op} onChange={(e) => setOp(e.target.value)}>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select>
        <input type="number" value={num2}  onChange={(e) => setNum2(e.target.value)}/>
        <button onClick={()=>oper()}>=</button>
        <span>{result}</span>

    </>
}

export default Calculator;







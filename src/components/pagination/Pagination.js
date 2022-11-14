import { useState } from "react";

function Pagination(){

    const list = ['A', 'B', 'C', 'D', 'E'];
    const [currentPage, setCurrentPage] = useState (list[0]);
    let [currentPosition, setPos] = useState(0);

    function next() {
       if(currentPosition < list.length-1){
        const nextPos = currentPosition+1;
        setPos(nextPos);
        setCurrentPage(list[nextPos]);
       } else{
        alert("Nao pode incrementar mais");
       }
    }

    function prev(){
        if (currentPosition > 0){
            const prevPos = currentPosition-1;
        setPos(prevPos);
        setCurrentPage(list[prevPos]); 
        } else {
            alert("Nao pode decrementar mais");
        }
    }

   

    return <>
        <button onClick={prev}>Prev</button>
        <h2>{currentPage}</h2>
        <button onClick={next}>Next</button>
    </>
}

export default Pagination
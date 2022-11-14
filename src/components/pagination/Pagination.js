import { useState } from "react";

function Pagination(){

    const list = ['A', 'B', 'C', 'D', 'E'];
    const [currentPage, setCurrentPage] = useState (list[0]);
    let [currentPosition, setPos] = useState(0);

    function next() {
        const nextPos = currentPosition+1;
        setPos(nextPos);
        setCurrentPage(list[nextPos]);
    }

    function prev(){
        const prevPos = currentPosition-1;
        setPos(prevPos);
        setCurrentPage(list[prevPos]); 
    }

   

    return <>
        <button onClick={prev}>Prev</button>
        <h2>{currentPage}</h2>
        <button onClick={next}>Next</button>
    </>
}

export default Pagination
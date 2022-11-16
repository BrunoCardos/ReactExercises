import { useEffect, useState } from "react";

 function Clock(){

    const [date, setDate] = useState (new Date());
    
    useEffect(() => {

        const timerID = setInterval(() => tick(), 1000);
        
        return function cleanup() {
        clearInterval(timerID);
        };
        
        });
        
        function tick() {
        setDate(new Date());
        }

    return <>
        <h1> {date.toLocaleTimeString()}</h1>
    </>
 }

 export default Clock
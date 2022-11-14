import { useState } from "react";
import './PaginationV2.css'

function PaginationV2(){

    let list = [
        {
            "name": "Suzana Mendonca",
            "age": 44,
            "bio": "Like go to the beach",
            "email": "Suzas@gmail.com",
        },
        {
            "name": "Joao Barros",
            "age": 15,
            "bio": "Play VideoGame",
            "email": "barros2000@gmail.com", 
        },
        {
            "name": "Carlos Pinto",
            "age": 22,
            "bio": "Likes Futeball",
            "email": "demminix@gmail.com", 
        },
        {
            "name": "Zuleica Barros",
            "age": 26,
            "bio": "Like to sing",
            "email": "Zulax@gmail.com", 
        }
    ];

        let [pos, setPos] = useState(0);



         const show = i => {
            setPos(i);
         }

         function isSelected(i){
            return i==pos?'selected':'';
         }


    return <div className="wrapper">
        <div className="top-menu">

            {list.map((person, i) =>
            <div className={isSelected(i)} key={i} onClick={(e)=>show(i)}>{person.name}</div>
            )}

        </div>
       
       <div className="big-box">
            Name: {list[pos].name} <br/>
            Age: {list[pos].age} <br/>
            Bio: {list[pos].bio} <br/>
            Email: {list[pos].email} <br/>
       </div>
    </div>
}


export default PaginationV2
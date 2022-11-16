import { useState } from "react"
import Table from "../../components/table/Table"
import WordCount from "../../components/wordCount/WordCout"
import Clock from "../../components/clock/Clock"
import './TablePage.css'



function TablePage(){
    
    const [list, setList] = useState ([
        {
            "firstName": "Bruno",
            "lastName": "Cardoso",
            "gender": "Male",
        },
        {
            "firstName": "Joana",
            "lastName": "Fernandes",
            "gender": "Female",
        },
        {
            "firstName": "Pedro",
            "lastName": "Garcia",
            "gender": "Male",
        },
        {
            "firstName": "Ilda",
            "lastName": "Barbosa",
            "gender": "Fenale",
        },
        {
            "firstName": "Mira",
            "lastName": "Sanches",
            "gender": "Female",
        }
    ])

    const remov = i => {
        list.splice(i, 1);
        const newList = [...list];
        setList(newList);

    }


    


    return <>
    <h1>Table Page</h1>

     {/* <Table list={list} myFun={remov}/> */}
     
     <WordCount /> 
     <Clock />
    </>
}
export default TablePage
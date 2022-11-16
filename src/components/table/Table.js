

function Table(props){


 return (  
        <table>
            <tr>
                <th>First Name </th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Op</th>
            </tr>

            {props.list.map((item, i)=>

                <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td><button onClick={(e)=>props.myFun(i)}>Emiminar</button></td>
                </tr>
       
             )}
    </table>
    )
}

export default Table
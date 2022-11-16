

function Table(props){

 return (  props.list.map((item, i)=>
        <table>
            <tr>
                <th>First Name </th>
                <th>Last Name</th>
                <th>Gender</th>
            </tr>
            <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.gender}</td>
            </tr>
        </table>
    )
    )
}

export default Table
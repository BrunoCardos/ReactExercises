

function Table(props){

    return <>
    <table>
    <tr>
        <th>Id</th>
        <th>First Name </th>
        <th>Last Name</th>
        <th>Gender</th>
    </tr>
    <tr>
        <td>{props.id}</td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props}</td>
    </tr>
</table>
    </>
}

export default Table
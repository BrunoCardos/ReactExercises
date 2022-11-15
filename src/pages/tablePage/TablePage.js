import Table from "../../components/table/Table"

const list = [
    {
        "id": 01,
        "firstName": "Bruno",
        "lastName": "Cardoso",
        "Gender": "Male",
    },
    {
        "id": 01,
        "firstName": "Bruno",
        "lastName": "Cardoso",
        "Gender": "Male",
    }
]


function TablePage(){

    return <>
    <h1>Table Page</h1>

    <Table />
    </>
}
export default TablePage
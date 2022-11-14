import PaginationV2 from "../../components/pagination v2/PaginationV2";
import Pagination from "../../components/pagination/Pagination";
import TodoApp from "../../components/todoapp/TodoApp";
import './TodoPage.css';

function TodoPage(){

    return <>
    <h1>Todo Page</h1>
    {/* <TodoApp/>
    <Pagination/> */}
    <PaginationV2 />
    </>
}

export default TodoPage
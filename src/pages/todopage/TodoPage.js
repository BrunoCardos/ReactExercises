import Login from "../../components/login/Login";
import PaginationV2 from "../../components/pagination v2/PaginationV2";
import Pagination from "../../components/pagination/Pagination";
import PhoneBook from "../../components/phoneBook/PhoneBook";
import TodoApp from "../../components/todoapp/TodoApp";
import './TodoPage.css';

function TodoPage(){

    return <>
     {/* <TodoApp/>
    <Pagination/> 
    <PaginationV2 /> */}
    <Login/>  
    <PhoneBook />
    </>
}

export default TodoPage
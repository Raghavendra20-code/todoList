import React, {useContext} from "react";
import Todo from "./Todo";
import {Link} from "react-router-dom";
import data from "./data.json";
import {useState} from "react";
import {UserContext} from '../App'

const TodoList = () => {
    const {toDoList,setToDoList} = useContext(UserContext);
    console.log('In todo')
    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === id ? {...task, complete: !task.complete} : {...task}
        })
        setToDoList(mapped)
    }

    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });
        setToDoList(filtered);
    }

    return(
        <div>
            {toDoList.map(todo =>{
                return(<Todo Todo = {todo} handleToggler = {handleToggle}/>)
            })}
            <button style={{margin: '20px'}} onClick={handleFilter} className='ButtonTodo'>Clear Completed</button>
            <Link to="/"><button className='ButtonHome'>Home</button></Link>
        </div>
    )
}

export default TodoList;
import React from "react";
import {Link} from "react-router-dom";

const Todo = ({Todo,handleToggler}) =>{
    return(
        <div className={Todo.complete?"strike":""}>
            <li onClick={() =>{handleToggler(Todo.id)}}>{Todo.task}</li>
        </div>
    )
}

export default Todo;
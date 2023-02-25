import React, {useState} from "react";
import data from "./data.json";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import '../App.css'
import {Link, Outlet} from "react-router-dom";

const Home = () =>{
    console.log('In Home')
    return (
        <div className = 'home'>
            <Link to="/todo"><button className='ButtonTodo'>Show Todo</button></Link>
            <Link to="/todo-form"><button className='ButtonTodoForm'>Todo</button></Link>
        </div>
    )
}

export default Home;
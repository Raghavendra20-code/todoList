import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import '../index.css'
import data from "./data.json";
import {UserContext} from '../App'
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
let cnt = false;
const TodoForm = () => {
    let navigate = useNavigate();
    const [ userInput, setUserInput ] = useState('');
    const {toDoList,setToDoList} = useContext(UserContext);
    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
        navigate('/todo', {replace: true});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    }
    return (
        <div>
            <form>
                <input type = 'text' value={userInput} onChange={e => {setUserInput(e.target.value)}} placeholder="Enter task..."/>
                <button onClick={handleSubmit }>Add Task</button>
            </form>
            <Link to="/"><button className='ButtonHome'>Home</button></Link>
        </div>
    )
}

export default TodoForm;
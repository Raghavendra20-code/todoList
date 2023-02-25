import './App.css';
import Home from "./Components/Home";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import Header from "./Components/Header";
import React from "react";
import data from "./Components/data.json";
import {useState} from "react";


export const UserContext = React.createContext(null);

function App() {
    const [ toDoList, setToDoList ] = useState(data);
  return (
      <BrowserRouter>
    <div className="App">
            <Header/>
        <UserContext.Provider value={{toDoList:toDoList,setToDoList:setToDoList}}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                    <Route exact path='/todo' element = {<TodoList/>}/>
                    <Route path='/todo-form' element={<TodoForm/>}/>
            </Routes>
        </UserContext.Provider>
    </div>
      </BrowserRouter>
  );
}

export default App;

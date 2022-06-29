import React, {useState} from 'react';

import {v4 as uuidv4} from 'uuid';
import Todos from './Todos';
import style from './Home.module.css';
import NewTodo from './NewTodo';

// const dummyTodos = [
//     {
//         id : 1,
//         title : "todo title 1",
//         desc : "todo1 description is here... "
//     },
//     {
//         id : 2,
//         title : "todo title 2",
//         desc : "todo2 description is here... "
//     },
// ];

const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo =(todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(),todo}];
        });
        console.log(todos);
    };
    const handleRemoveTodo = (id) => {
        
        setTodos((prevTodos) =>{
            const filteredTodos =prevTodos.filter((todo) => todo.id != id );
            return filteredTodos;
        });

    }
  return (
    <div className={style.container}>
        <h1 style={{color: "white"}}>Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo}/>
        <Todos  todos={todos} onRemoveTodo={handleRemoveTodo}/>
        </div>
  ) 
};

export default Home;
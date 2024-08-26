import React, { useEffect } from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import { useState } from 'react';
import TodoList from './TodoList';

const TodoKey = "TodoList"

export default function Todo() {

    const [Task,setTask] = useState(() => {
        const RawData = localStorage.getItem(TodoKey);
        
        if(!RawData) return [];
        
        return JSON.parse(RawData);
    });
    const [DateTime,setDateTime] = useState("");



    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;

        if(!content) return;

        // if(Task.includes(inputValue)){
        //     setInputValue("");
        //     return;
        // }

        const ifContentMatched = Task.find((curr) => curr.content === content);

        if(ifContentMatched) return;

        setTask( (prev) => [...prev, {id, content, checked}]);
    }

    localStorage.setItem(TodoKey,JSON.stringify(Task));
    

    useEffect( () => {
        const interval = setInterval(() => {
            const date = new Date();
            const newDate = date.toLocaleDateString();
            const newTime = date.toLocaleTimeString();
            setDateTime(`${newDate} - ${newTime}`);
        }, 1000);

        return () => clearInterval(interval);

    },[]);

    const handleDeleteTask = (value) => {
        const newTask = Task.filter( (curr) => curr.content !== value);
        setTask(newTask);
    }

    const handleCheckTask = (content) => {
        const updatedTask = Task.map( (curr) => {
            if(curr.content === content){
                return {...curr,checked: !curr.checked};
            }else{
                return curr;
            }
        });
        setTask(updatedTask);
    }

    const handleClearTask = () => {
        setTask([]);
    }



  return (
    <section className="todo-container">
        <header>
        <h1>TODO LIST</h1>
        <h3 className='date-time'>{DateTime}</h3>
        </header>

        <TodoForm AddTodo={handleFormSubmit}/>

        <section className='myUnOrdList'>
            <ul>
                {
                    Task.map( (curr) => {
                        return (
                            <TodoList key={curr.id} data={curr.content} checked={curr.checked} onHandleDelete={handleDeleteTask} onHandleChecked={handleCheckTask}/>
                        )
                    })
                }
            </ul>

            
        </section>

        
        <section>
            <div>
                <button className='clear-btn' onClick={handleClearTask}>Clear All</button>
            </div>
        </section>
    </section>
  )
}

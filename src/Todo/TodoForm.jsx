import React, { useState } from 'react'

export default function TodoForm({AddTodo}) {

    const [inputValue,setInputValue] = useState({});

    const handleInputChange = (value) => {
        setInputValue({id: value, content: value, checked: false});
    }

    const handleFormSubmit = (e) => {   
        e.preventDefault();
        AddTodo(inputValue);
        setInputValue({id: "", content: "", checked: ""});
    }
  return (
    <section className='form'>
            <form action="#" onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className='todo-input' autoComplete='off' placeholder='Enter Your Task' value={inputValue.content} onChange={(e) => handleInputChange(e.target.value)}/>
                </div>
                <div>
                    <button type='submit' className='todo-btn'>Add Task</button>
                </div>
            </form>
    </section>
  )
}

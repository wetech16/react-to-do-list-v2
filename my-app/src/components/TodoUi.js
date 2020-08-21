import React, {useState} from 'react'
import TodoList from './TodoList'


export default function TodoUi() {
    const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1' , complete: false}]) 
    return (
        <div className="App-header">
            <TodoList todos={todos} />
            <input type="text" />
            <button>Add Todo</button>
            <button>CLear Complete</button>
            <div>0 left to do</div>
        </div>
    )
}

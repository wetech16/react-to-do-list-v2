import React, {useState, useRef} from 'react'
import TodoList from './TodoList'


export default function TodoUi() {
    const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1' , complete: false}])
    const todoRef = useRef()
    function handleAddTodo () {
        
    }

    return (
        <div className="App-header">
            <TodoList todos={todos} />
            <input ref={todoRef} type="text" />
            <button onClick={handleAddTodo}>Add Todo</button>
            <button>CLear Complete</button>
            <div>0 left to do</div>
        </div>
    )
}

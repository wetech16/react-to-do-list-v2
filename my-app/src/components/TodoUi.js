import React, {useState, useRef} from 'react'
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'

export default function TodoUi() {
    const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1' , complete: false}])
    const todoRef = useRef()
    function handleAddTodo () {
        const name = todoRef.current.value
        if (name ==='') return
        setTodos(prev => {
            return [...prev, {id: uuidv4(), name:name, complete:false}]
        })
        todoRef.current.value = null;
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

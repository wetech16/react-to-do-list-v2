import React, {useState, useRef, useEffect} from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function TodoUi() {
    const [todos, setTodos] = useState([])
    const todoRef = useRef()

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
       if (storedTodos) { setTodos(storedTodos) }
    }, [])

    useEffect(() => {
       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

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

import { useEffect, useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List"

export const ToDoList = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/todos?limit=5')
            .then(res => res.json())
            .then(data => setTodos(data.todos))

    }, [])
    return <>
        <AddToDo
        
        />
        <List
            todos={todos}
        />
    </>
}

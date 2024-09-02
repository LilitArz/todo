import { ToDoItem } from "./ToDoItem"

export const List = ({todos}) => {
  return <div>
    {
        todos.map(todo => <ToDoItem key={todo.id} todo={todo}/>)
    }
  </div>

}
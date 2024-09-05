import { useContext } from "react"
import { ToDoContext } from "../TodoContext"

export const ToDoFilter:React.FC = () => {
    const {filter, setFilter} = useContext(ToDoContext)
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
    <option value="All">All</option>
    <option value="Done">Done</option>
    <option value="Not Done">Not Done</option>
</select>
  )
}

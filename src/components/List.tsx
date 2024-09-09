import { useContext } from 'react';
import { ToDoItem } from './ToDoItem';
import { ToDoContext } from '../TodoContext';
import { Link } from 'react-router-dom';

export const List: React.FC = () => {
    const { state, filter } = useContext(ToDoContext);

    const filterTodos = state.filter((todo) =>
        filter === 'Done' ? todo.completed : filter === 'Not Done' ? !todo.completed : true,
    );

    return (
        <div className="todo-list">
            <Link className="link-button" to="/addtodo">
                Add Task
            </Link>

            <h1>TODO LIST</h1>

            {filterTodos.map((todo) => (
                <div key={todo.id} className="todo-item">
                    <ToDoItem todo={todo} />
                </div>
            ))}
        </div>
    );
};

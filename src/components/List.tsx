import { useContext } from 'react';
import { ToDoItem } from './ToDoItem';
import { ToDoContext } from '../TodoContext';
import { Link } from 'react-router-dom';

export const List: React.FC = () => {
    const { state } = useContext(ToDoContext);

    return (
        <div>
            <div className="todo-list">
                <nav>
                    <Link className="link-button" to="/addtask">
                        Add Task
                    </Link>
                </nav>

                <h1>TODO LIST</h1>

                {state.map((todo) => (
                    <div key={todo.id} className="todo-item">
                        <ToDoItem todo={todo} />
                    </div>
                ))}
            </div>
        </div>
    );
};

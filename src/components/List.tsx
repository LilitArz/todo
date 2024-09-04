import { useContext } from 'react';
import { ToDoItem } from './ToDoItem';
import { ToDoContext } from '../TodoContext';

export const List: React.FC = () => {
    const { state } = useContext(ToDoContext);

    return (
        <div className="todo-list">
            <h1>TODO LIST</h1>
            {state.map((todo) => (
                <div key={todo.id} className="todo-item">
                    <ToDoItem todo={todo} />
                </div>
            ))}
        </div>
    );
};

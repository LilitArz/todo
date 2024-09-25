import { useContext, useMemo } from 'react';
import { ToDoItem } from './ToDoItem';
import { ContextForFilter, ToDoContext } from '../contexts';
import { Link } from 'react-router-dom';
import { ToDoFilter } from './ToDoFilter';
import { FILTER_KEYS } from '../utils/enum';

export const List: React.FC = () => {
    const { todos } = useContext(ToDoContext);
    const { filter } = useContext(ContextForFilter);

    const filteredTodos = useMemo(() => {
        return todos.filter((todo) => {
            switch (filter) {
                case FILTER_KEYS.done:
                    return todo.completed;
                case FILTER_KEYS.notDone:
                    return !todo.completed;
                default:
                    return true;
            }
        });
    }, [todos, filter]);

    return (
        <div className="todo-list">
            <h1>TODO LIST</h1>
            <div className="container">
                <Link className="link-button" to="/add-todo">
                    Add Task
                </Link>
                <ToDoFilter />
            </div>
            <div >
                {filteredTodos.map((todo) => (
                    <ToDoItem key={todo.id} todoItem={todo} />
                ))}
            </div>
         </div>
    );
};

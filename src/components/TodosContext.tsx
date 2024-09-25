import { ReactNode, useState } from 'react';
import { ITodo, IAddTodoItem } from '../utils/helpers/types';
import { TODOS } from '../utils/constants';
import { ToDoContext } from '../contexts';

export const TodosContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<ITodo[]>(TODOS);

    const handleDelete = (id: number) => setTodos(todos.filter((todo) => todo.id !== id));

    const handleComplete = (id: number) =>
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        );

    const handleUpdate = (id: number, newText: string) =>
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: newText } : todo)));

    const handleAddNewTodo = (newTodo: IAddTodoItem) =>
        setTodos([...todos, { ...newTodo, id: Date.now() }]);

    return (
        <ToDoContext.Provider
            value={{
                todos,
                setTodos,
                remove: handleDelete,
                complete: handleComplete,
                update: handleUpdate,
                addTodo: handleAddNewTodo,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
};

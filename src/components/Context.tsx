import { ReactNode, useState } from 'react';
import { ITodo, IAddTodoItem } from '../utils/helpers/types';
import { TODOS } from '../utils/helpers/constants';
import { ToDoContext } from '../utils/helpers/contexts';

export const Context: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<ITodo[]>(TODOS);

    const handleDelete = (id: number) => setState(state.filter((todo) => todo.id !== id));

    const handleComplete = (id: number) =>
        setState(
            state.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        );

    const handleUpdate = (id: number, newText: string) =>
        setState(state.map((todo) => (todo.id === id ? { ...todo, todo: newText } : todo)));

    const handleAddNewTodo = (newTodo: IAddTodoItem) =>
        setState([...state, { ...newTodo, id: Date.now() }]);

    return (
        <ToDoContext.Provider
            value={{
                state,
                setState,
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

import { useEffect, useState } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { ToDoContext } from './TodoContext';
import { getTodos } from './utils/helpers/api';
import { ITodo } from './utils/helpers/types';

function App() {
    const [state, setState] = useState<ITodo[]>([]);
    const [filter, setFilter] = useState<string>('All');

    useEffect(() => {
        getTodos().then((response) => {
            setState(response.todos);
        });
    }, []);

    const handleDelete = (id: number) => {
        setState(state.filter((todo) => todo.id !== id));
    };

    const handleComplete = (id: number) => {
        setState(
            state.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        );
    };

    const handleUpdate = (id: number, newText: string) => {
        setState(state.map((todo) => (todo.id === id ? { ...todo, todo: newText } : todo)));
    };
    return (
        <div className="App">
            <ToDoContext.Provider
                value={{
                    state,
                    setState,
                    remove: handleDelete,
                    complete: handleComplete,
                    update: handleUpdate,
                }}
            >
                <ToDoList />
            </ToDoContext.Provider>
        </div>
    );
}

export default App;

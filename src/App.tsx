import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { TodosContext } from './components/TodosContext';
import { AddToDos } from './components/AddToDo';
import { ToDoList } from './components/ToDoList';
import { FilterContext } from './components/FilterContext';

const App = () => {
    return (
        <TodosContext>
            <FilterContext>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ToDoList />} />
                        <Route path="add-todo" element={<AddToDos />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </FilterContext>
        </TodosContext>
    );
};

export default App;

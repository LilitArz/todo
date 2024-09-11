import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { StateContext } from './components/StateContext';
import { AddToDos } from './components/AddToDo';
import { ToDoList } from './components/ToDoList';
import { FilterContext } from './components/FilterContext';

const App = () => {
    return (
        <StateContext>
            <FilterContext>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ToDoList />} />
                        <Route path="add-todo" element={<AddToDos />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </FilterContext>
        </StateContext>
    );
};

export default App;

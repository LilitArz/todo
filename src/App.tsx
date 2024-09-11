import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Context } from './components/Context';
import { AddToDos } from './components/AddToDo';
import { ToDoList } from './components/ToDoList';
import { FilterContext } from './components/FilterContext';

const App = () => {
    return (
        <Context>
            <FilterContext>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ToDoList />} />
                        <Route path="addtodo" element={<AddToDos />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </FilterContext>
        </Context>
    );
};

export default App;

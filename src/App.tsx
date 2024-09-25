import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { TodosContext } from './components/TodosContext';
import { AddToDos } from './components/AddToDo';
import { List } from './components/List';
import { FilterContext } from './components/FilterContext';

const App = () => {
    return (
        <TodosContext>
            <FilterContext>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<List />} />
                        <Route path="add-todo" element={<AddToDos />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </FilterContext>
        </TodosContext>
    );
};

export default App;

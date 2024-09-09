import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Context } from './Context';
import { AddToDos } from './components/AddToDo';
import { Homepage } from './HomePage';

const App = () => {
    return (
        <Context>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="addtodo" element={<AddToDos />} />
                </Routes>
            </BrowserRouter>
        </Context>
    );
};

export default App;

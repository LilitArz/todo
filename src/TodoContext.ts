import React from 'react';
import {  ITodosContextType } from './utils/helpers/types';

export const ToDoContext = React.createContext<ITodosContextType>({
    state: [],
    setState: () => {},
    remove: () => {},
    complete: () => {},
    update: () => {}
});

// export const initialState: IState = {
//     todos: [],
//     currentFilter: FilterTypes.all
// }

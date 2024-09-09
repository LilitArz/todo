import React from 'react';
import {  ITodosContextType } from './utils/helpers/types';

export const ToDoContext = React.createContext<ITodosContextType>({
    state: [],
    filter: 'All',
    setFilter: () => {},
    setState: () => {},
    remove: () => {},
    complete: () => {},
    update: () => {},
    addTodo: () => {}
});

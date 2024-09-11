import React from 'react';
import { ITodosContextType, ITodosFilterType } from './types';
import { FILTER_KEYS } from '../enum';

export const ToDoContext = React.createContext<ITodosContextType>({
    state: [],
    setState: () => {},
    remove: () => {},
    complete: () => {},
    update: () => {},
    addTodo: () => {},
});

export const ContextForFilter = React.createContext<ITodosFilterType>({
    filter: FILTER_KEYS.all,
    setFilter: () => {},

})

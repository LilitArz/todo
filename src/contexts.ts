import React from 'react';
import { ITodosContextType, ITodosFilterType } from './utils/helpers/types';
import { FILTER_KEYS } from './utils/enum';

export const ToDoContext = React.createContext<ITodosContextType>({
    todos: [],
    setTodos: () => {},
    remove: () => {},
    complete: () => {},
    update: () => {},
    addTodo: () => {},
});

export const ContextForFilter = React.createContext<ITodosFilterType>({
    filter: FILTER_KEYS.all,
    setFilter: () => {},
});

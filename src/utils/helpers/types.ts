export type TTodosApi = {
    completed: boolean;
    userId: number;
    todo: string;
    id: number;
    todos: ITodo[];
};
export interface ITodo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}
export interface IAddTodoItem {
    todo: string;
    completed: boolean;
    userId: number;
}

export interface ITodosContextType {
    state: ITodo[];
    setState: (todos: ITodo[]) => void;
    remove: (id: number) => void;
    complete: (id: number) => void;
    update: (id: number, todo: string) => void;
    addTodo: (todo: IAddTodoItem) => void;
}

export interface ITodosFilterType {
    filter: number;
    setFilter: (filter: number) => void;

}
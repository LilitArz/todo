
export type TTodosApi ={
    todos:ITodo[]
}
export interface ITodo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number
}
export enum FilterTypes{
    all,
    active,
    completed
}
export interface IState{
    todos:ITodo[]
    // currentFilter:FilterTypes
}
export enum ActionTypes{
    add,
    remove,
    update
}
export interface IAction {
    type: ActionTypes,
    payload: unknown

}
export interface ITodosContextType {
    state:ITodo[]
    setState: (todos:ITodo[])=> void
    remove: (id:number) => void
    complete: (id:number) => void
    update: (id:number, todo:string) => void

}
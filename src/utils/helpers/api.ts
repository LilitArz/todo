import axios from 'axios';
import { TTodosApi } from './types';

export const getTodos = async (): Promise<TTodosApi> => {
    const response = await axios.get('https://dummyjson.com/todos?limit=5');
    return response.data;
};

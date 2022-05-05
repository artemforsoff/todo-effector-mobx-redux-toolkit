import { axios } from 'shared/lib/axios';
import { PartialExcept } from 'shared/utility-types';

const getAllTodos = async () => axios.get<app.Todo[]>('todos', { params: { _limit: 10 } });

const getTodo = (id: app.Todo['id']) => axios.get<app.Todo>(`todos/${id}`);

const createTodo = (todo: Omit<app.Todo, 'id'>) => {
    return axios.post<app.Todo>('todos', todo);
};

const updateTodo = (todo: PartialExcept<app.Todo, 'id'>) => {
    return axios.put<app.Todo>(`todos/${todo.id}`, todo);
};

const deleteTodo = (id: app.Todo['id']) => axios.delete<unknown>(`todos/${id}`);

export const todoApi = {
    getAllTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
};

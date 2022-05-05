import { axios } from 'shared/lib/axios';
import { PartialExcept } from 'shared/utility-types';

const getAllTodos = async () => axios.get<app.Todo[]>('todos', { params: { _limit: 10 } });

const getTodo = (id: app.Todo['id']) => axios.get(`todos/${id}`);

const createTodo = (todo: Omit<app.Todo, 'id'>) => {
    return axios.post('todos', todo);
};

const updateTodo = (todo: PartialExcept<app.Todo, 'id'>) => {
    return axios.put(`todos/${todo.id}`, todo);
};

const deleteTodo = (id: app.Todo['id']) => axios.delete(`todos/${id}`);

export const todoApi = {
    getAllTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
};

import { makeAutoObservable } from 'mobx';
import { todoApi } from 'shared/api';

class Todo {
    entities: app.Todo[] = [];
    entitiesLoaded = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    fetchAllTodos = async () => {
        this.isLoading = true;

        try {
            const { data } = await todoApi.getAllTodos();

            this.entities = data;
            this.entitiesLoaded = true;
        } finally {
            this.isLoading = false;
        }
    };

    fetchCreateTodo = async (payload: Parameters<typeof todoApi.createTodo>['0']) => {
        this.isLoading = true;

        try {
            const response = await todoApi.createTodo(payload);
            this.entities.unshift(response.data);
            return response;
        } finally {
            this.isLoading = false;
        }
    };

    fetchUpdateTodo = async (payload: Parameters<typeof todoApi.updateTodo>['0']) => {
        this.isLoading = true;

        try {
            const response = await todoApi.updateTodo(payload);
            this.entities = this.entities.map((todo) => {
                if (todo.id === response.data.id) {
                    return response.data;
                }
                return todo;
            });
            return response;
        } finally {
            this.isLoading = false;
        }
    };

    fetchDeleteTodo = async (payload: Parameters<typeof todoApi.deleteTodo>['0']) => {
        this.isLoading = true;

        try {
            await todoApi.deleteTodo(payload);
            this.entities = this.entities.filter((todo) => {
                return todo.id !== payload;
            });
        } finally {
            this.isLoading = false;
        }
    };
}

export const todoStore = new Todo();

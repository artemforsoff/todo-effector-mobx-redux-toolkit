import { makeAutoObservable } from 'mobx';
import { todoApi } from 'shared/api';

class Todo {
    entities: app.Todo[] = [];
    entitiesLoaded = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    fetchAllTodos = () => {
        this.isLoading = true;

        return todoApi
            .getAllTodos()
            .then(({ data }) => {
                this.entities = data;
                this.entitiesLoaded = true;
            })
            .finally(() => {
                this.isLoading = false;
            });
    };

    fetchCreateTodo = (payload: Parameters<typeof todoApi.createTodo>['0']) => {
        this.isLoading = true;

        return todoApi
            .createTodo(payload)
            .then(({ data }) => {
                this.entities.unshift(data);
            })
            .finally(() => {
                this.isLoading = false;
            });
    };
}

export const todoStore = new Todo();

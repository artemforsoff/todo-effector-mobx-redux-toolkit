import { makeAutoObservable } from "mobx";
import { todoApi } from "shared/api";

class Todo {
  entities: app.Todo[] = [];
  entitiesLoaded = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchAllTodos = () => {
    this.isLoading = true;

    todoApi
      .getAllTodos()
      .then(({ data }) => {
        this.entities = data;
        this.entitiesLoaded = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
  };
}

export const todo = new Todo();

import { useEffect } from "react";
import { useDispatch, useSelector } from "stores/redux-toolkit";
import { fetchAllTodos } from "stores/redux-toolkit/todo";

export const ReduxToolkit = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.entities);
  const todosLoaded = useSelector((state) => state.todo.entitiesLoaded);
  const isLoading = useSelector((state) => state.todo.isLoading);

  useEffect(() => {
    if (!todosLoaded) {
      dispatch(fetchAllTodos());
    }
  }, [dispatch, todosLoaded]);

  return (
    <div>
      {isLoading && <p>loading...</p>}

      <ul>
        {todos.map(({ title, completed, id }) => (
          <li key={id}>
            {title} - {completed}
          </li>
        ))}
      </ul>
    </div>
  );
};

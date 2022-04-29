import { useStore } from "effector-react";
import { useEffect } from "react";
import { $todos, $todosLoaded, getAllTodosFx } from "stores/effector/todo";

export const Effector = () => {
  const todos = useStore($todos);
  const todosLoaded = useStore($todosLoaded);
  const isLoading = useStore(getAllTodosFx.pending);

  useEffect(() => {
    if (!todosLoaded) {
      getAllTodosFx();
    }
  }, [todosLoaded]);

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

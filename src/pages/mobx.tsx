import { observer } from "mobx-react";
import { todo } from "stores/mobx";
import { useEffect } from "react";
import { autorun } from "mobx";

export const Mobx = observer(() => {
  useEffect(() => {
    autorun(() => {
      if (!todo.entitiesLoaded) {
        todo.fetchAllTodos();
      }
    });
  }, []);

  return (
    <div>
      {todo.isLoading && <p>loading...</p>}

      <ul>
        {todo.entities.map(({ title, completed, id }) => (
          <li key={id}>
            {title} - {completed}
          </li>
        ))}
      </ul>
    </div>
  );
});

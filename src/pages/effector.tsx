import { useStore } from "effector-react";
import { $count, decrement, increment } from "stores/effector";

export const Effector = () => {
  const count = useStore($count);

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <button onClick={decrement}>decrement</button>
      <span>effector count: {count}</span>
      <button onClick={increment}>increment</button>
    </div>
  );
};

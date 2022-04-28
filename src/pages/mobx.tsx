import { observer } from "mobx-react";
import { counter } from "stores/mobx";

export const Mobx = observer(() => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <button onClick={() => counter.decrement()}>decrement</button>
      <span>mobx count: {counter.count}</span>
      <button onClick={() => counter.increment()}>increment</button>
    </div>
  );
});

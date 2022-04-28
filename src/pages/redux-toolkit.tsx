import { useDispatch, useSelector } from "stores/redux-toolkit";
import { decrement, increment } from "stores/redux-toolkit/counter";

export const ReduxToolkit = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <span>redux-toolkit count: {count}</span>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
};

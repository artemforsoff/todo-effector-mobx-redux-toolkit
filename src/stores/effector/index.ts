import { createEvent, createStore } from "effector";

export const $count = createStore(0);

export const decrement = createEvent<any>();
export const increment = createEvent<any>();

$count.on(decrement, (count) => count + 1).on(increment, (count) => count - 1);

import { createEffect, createEvent, createStore } from 'effector';
import { numberApi } from 'shared/api';

export const $count = createStore(10);

export const increment = createEvent();
export const decrement = createEvent();

export const getRandomNumberFx = createEffect(numberApi.getRandomNumber);

$count
    .on(increment, (count) => count + 1)
    .on(decrement, (count) => count - 1)
    .on(getRandomNumberFx.doneData, (_, { data }) => Number(data));

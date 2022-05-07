import { createStore } from 'effector';
import { orange } from 'shared/constants';

export const $oranges = createStore<typeof orange[]>(Array(2).fill(orange));

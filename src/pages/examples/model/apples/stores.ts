import { createStore } from 'effector';
import { apple } from 'shared/constants';

export const $apples = createStore<typeof apple[]>([apple]);

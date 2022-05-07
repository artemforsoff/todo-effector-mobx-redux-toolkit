import { createEvent } from 'effector';

export const addOranges = createEvent<number | void>();
export const deleteOrange = createEvent();
export const reset = createEvent();

export const divideByTwo = createEvent();
// export const addOrangeAsNowAmountApples = createEvent();

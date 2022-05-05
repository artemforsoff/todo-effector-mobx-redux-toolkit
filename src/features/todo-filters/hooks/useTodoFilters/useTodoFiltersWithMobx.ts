import { todoStore } from 'stores/mobx';
import { UseTodoFiltersResponse } from './types';

export const useTodoFiltersWithMobx = (): UseTodoFiltersResponse => ({
    clearAllCompleted: todoStore.clearAllCompleted,
    filterBy: todoStore.filterBy,
});

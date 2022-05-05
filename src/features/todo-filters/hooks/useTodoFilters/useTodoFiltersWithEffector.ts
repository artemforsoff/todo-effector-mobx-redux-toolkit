import { UseTodoFiltersResponse } from './types';
import { filterBy, clearAllCompleted } from 'stores/effector/todo';

export const useTodoFiltersWithEffector = (): UseTodoFiltersResponse => ({
    clearAllCompleted,
    filterBy,
});

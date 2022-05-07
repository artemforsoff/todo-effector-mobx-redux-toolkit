import { recoilStore } from 'stores/recoil';
import { UseTodoFiltersResponse } from './types';

export const useTodoFiltersWithRecoil = (): UseTodoFiltersResponse => {
    const { filterBy, clearAllCompleted } = recoilStore.todo.useTodoActions();

    return {
        filterBy,
        clearAllCompleted,
    };
};

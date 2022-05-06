import { recoilStore } from 'stores/recoil';
import { UseTodoFiltersResponse } from './types';

export const useTodoFiltersWithRecoil = (): UseTodoFiltersResponse => {
    const actions = recoilStore.todo.useTodoActions();

    return {
        filterBy: actions.filterBy,
        clearAllCompleted: actions.clearAllCompleted,
    };
};

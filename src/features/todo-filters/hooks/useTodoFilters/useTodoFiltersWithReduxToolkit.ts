import { useDispatch } from 'stores/redux-toolkit';
import { clearAllCompleted, filterBy } from 'stores/redux-toolkit/todo';
import { UseTodoFiltersResponse } from './types';

export const useTodoFiltersWithReduxToolkit = (): UseTodoFiltersResponse => {
    const dispatch = useDispatch();

    return {
        clearAllCompleted: () => dispatch(clearAllCompleted()),
        filterBy: (filter) => dispatch(filterBy(filter)),
    };
};

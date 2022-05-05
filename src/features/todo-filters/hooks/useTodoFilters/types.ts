import { Filter } from 'shared/constants';

export type UseTodoFiltersResponse = {
    filterBy: (filter: Filter) => void;
    clearAllCompleted: () => void;
};

import { atom, selector, useRecoilState, useSetRecoilState } from 'recoil';
import { Filter } from 'shared/constants';
import { todoApi } from 'shared/api';

export const todosState = atom<app.Todo[]>({
    key: 'todosState',
    default: [],
});

export const isLoadingState = atom({
    key: 'isLoadingState',
    default: false,
});

export const todosLoadedState = atom({
    key: 'todosLoadedState',
    default: false,
});

export const filterState = atom<Filter>({
    key: 'filterState',
    default: Filter.all,
});

export const filteredTodosState = selector({
    key: 'filteredTodosState',
    get: ({ get }) => {
        const todos = get(todosState);
        const filter = get(filterState);

        if (filter === Filter.all) return todos;

        return todos.filter(({ completed }) => {
            return filter === Filter.active ? !completed : completed;
        });
    },
});

export const useTodoActions = () => {
    const setIsLoading = useSetRecoilState(isLoadingState);
    const [todos, setTodos] = useRecoilState(todosState);
    const setTodosLoaded = useSetRecoilState(todosLoadedState);

    const setFilter = useSetRecoilState(filterState);

    const clearAllCompleted = () => {
        setTodos(todos.filter(({ completed }) => !completed));
    };

    const fetchTodos = async () => {
        setIsLoading(true);
        try {
            const response = await todoApi.getAllTodos();
            setTodosLoaded(true);
            setTodos(response.data);
            return response;
        } finally {
            setIsLoading(false);
        }
    };

    const fetchCreateTodo = async (payload: Parameters<typeof todoApi.createTodo>['0']) => {
        setIsLoading(true);

        try {
            const response = await todoApi.createTodo(payload);
            setTodos([response.data, ...todos]);
            return response;
        } finally {
            setIsLoading(false);
        }
    };

    const fetchUpdateTodo = async (payload: Parameters<typeof todoApi.updateTodo>['0']) => {
        setIsLoading(true);

        try {
            const response = await todoApi.updateTodo(payload);

            setTodos(
                todos.map((todo) => {
                    if (todo.id === response.data.id) {
                        return response.data;
                    }
                    return todo;
                })
            );
            return response;
        } finally {
            setIsLoading(false);
        }
    };

    const fetchDeleteTodo = async (payload: Parameters<typeof todoApi.deleteTodo>['0']) => {
        setIsLoading(true);

        try {
            await todoApi.deleteTodo(payload);
            setTodos(
                todos.filter((todo) => {
                    return todo.id !== payload;
                })
            );
        } finally {
            setIsLoading(false);
        }
    };

    return {
        filterBy: setFilter,
        clearAllCompleted,
        fetchCreateTodo,
        fetchUpdateTodo,
        fetchDeleteTodo,
        fetchTodos,
    };
};

export const todoStore = {
    useTodoActions,
    atoms: { todosState, isLoadingState, todosLoadedState, filterState },
    selectors: { filteredTodosState },
};

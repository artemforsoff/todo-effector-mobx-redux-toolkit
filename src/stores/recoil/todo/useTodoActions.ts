import { useRecoilState } from 'recoil';
import { todoApi } from 'shared/api';
import { Filter } from 'shared/constants';
import { filterState, isLoadingState, todosState } from './atoms';

export const useTodoActions = () => {
    const [, setIsLoading] = useRecoilState(isLoadingState);
    const [todos, setTodos] = useRecoilState(todosState);

    const [, setFilter] = useRecoilState(filterState);

    const filterBy = (filter: Filter) => setFilter(filter);

    const clearAllCompleted = () => {
        setTodos(todos.filter(({ completed }) => !completed));
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
        filterBy,
        clearAllCompleted,
        fetchCreateTodo,
        fetchUpdateTodo,
        fetchDeleteTodo,
    };
};

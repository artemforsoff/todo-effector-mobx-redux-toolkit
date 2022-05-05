import { useStore } from 'effector-react';
import { ACTIVE_STORE_MANAGER, StoreManager } from 'shared/constants';
import { $isLoading } from 'stores/effector/todo';
import { todoStore } from 'stores/mobx';
import { useSelector } from 'stores/redux-toolkit';

export const useIsLoading = () => {
    const isMobxLoading = todoStore.isLoading;
    const isReduxToolkitLoading = useSelector(({ todo }) => todo.isLoading);
    const isEffectorLoading = useStore($isLoading);

    const loaders: Record<StoreManager, boolean> = {
        mobx: isMobxLoading,
        'redux-toolkit': isReduxToolkitLoading,
        effector: isEffectorLoading,
    };

    return loaders[ACTIVE_STORE_MANAGER];
};

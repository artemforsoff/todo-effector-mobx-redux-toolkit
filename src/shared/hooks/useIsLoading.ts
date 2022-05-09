import { useStore } from 'effector-react';
import { useRecoilValue } from 'recoil';
import { ACTIVE_STATE_MANAGER, StateManager } from 'shared/constants';
import { $isLoading } from 'stores/effector/todo';
import { todoStore } from 'stores/mobx';
import { recoilStore } from 'stores/recoil';
import { useSelector } from 'stores/redux-toolkit';

export const useIsLoading = () => {
    const isMobxLoading = todoStore.isLoading;
    const isReduxToolkitLoading = useSelector(({ todo }) => todo.isLoading);
    const isEffectorLoading = useStore($isLoading);
    const isRecoilLoading = useRecoilValue(recoilStore.todo.atoms.isLoadingState);

    const loaders: Record<StateManager, boolean> = {
        mobx: isMobxLoading,
        'redux-toolkit': isReduxToolkitLoading,
        effector: isEffectorLoading,
        recoil: isRecoilLoading,
    };

    return loaders[ACTIVE_STATE_MANAGER];
};

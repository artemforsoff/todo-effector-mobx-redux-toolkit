import { ACTIVE_STORE_MANAGER, StoreManager } from 'shared/constants';
import { UseTodoListResponse } from './types';
import { useTodoListWithEffector } from './useTodoListWithEffector';
import { useTodoListWithMobx } from './useTodoListWithMobx';
import { useTodoListWithReduxToolkit } from './useTodoListWithReduxToolkit';

const hooks: Record<StoreManager, () => UseTodoListResponse> = {
    effector: useTodoListWithEffector,
    mobx: useTodoListWithMobx,
    'redux-toolkit': useTodoListWithReduxToolkit,
};

export const useTodoList = hooks[ACTIVE_STORE_MANAGER];

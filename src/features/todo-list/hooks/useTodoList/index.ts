import { ACTIVE_STORE_MANAGER, StoreManager } from 'shared/constants';
import { UseTodoList } from './types';
import { useTodoListWithEffector } from './useTodoListWithEffector';
import { useTodoListWithMobx } from './useTodoListWithMobx';
import { useTodoListWithReduxToolkit } from './useTodoListWithReduxToolkit';
import { useTodoListWithRecoil } from './useTodoListWithRecoil';

const hooks: Record<StoreManager, UseTodoList> = {
    effector: useTodoListWithEffector,
    mobx: useTodoListWithMobx,
    'redux-toolkit': useTodoListWithReduxToolkit,
    recoil: useTodoListWithRecoil,
};

export const useTodoList = hooks[ACTIVE_STORE_MANAGER];

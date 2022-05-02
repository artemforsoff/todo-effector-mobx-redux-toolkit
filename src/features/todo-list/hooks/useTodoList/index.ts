import { ACTIVE_STORE_MANAGER } from 'shared/constants';
import { UseTodoList } from './types';
import { useTodoListWithEffector } from './useTodoListWithEffector';
import { useTodoListWithMobx } from './useTodoListWithMobx';
import { useTodoListWithReduxToolkit } from './useTodoListWithReduxToolkit';

const hooks: Record<typeof ACTIVE_STORE_MANAGER, () => UseTodoList> = {
    effector: useTodoListWithEffector,
    mobx: useTodoListWithMobx,
    'redux-toolkit': useTodoListWithReduxToolkit,
};

export const useTodoList = () => hooks[ACTIVE_STORE_MANAGER]();

import { ACTIVE_STATE_MANAGER, StateManager } from 'shared/constants';
import { UseTodoList } from './types';
import { useTodoListWithEffector } from './useTodoListWithEffector';
import { useTodoListWithMobx } from './useTodoListWithMobx';
import { useTodoListWithReduxToolkit } from './useTodoListWithReduxToolkit';
import { useTodoListWithRecoil } from './useTodoListWithRecoil';

const hooks: Record<StateManager, UseTodoList> = {
    effector: useTodoListWithEffector,
    mobx: useTodoListWithMobx,
    'redux-toolkit': useTodoListWithReduxToolkit,
    recoil: useTodoListWithRecoil,
};

export const useTodoList = hooks[ACTIVE_STATE_MANAGER];

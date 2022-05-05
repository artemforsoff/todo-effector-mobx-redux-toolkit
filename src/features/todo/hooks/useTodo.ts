import { ACTIVE_STORE_MANAGER } from 'shared/constants';
import { UseTodo } from './types';
import { useTodoWithEffector } from './useTodoWithEffector';
// import { useTodoListWithMobx } from './useTodoListWithMobx';
// import { useTodoListWithReduxToolkit } from './useTodoListWithReduxToolkit';

// const hooks: Record<typeof ACTIVE_STORE_MANAGER, () => UseTodo> = {
const hooks: Record<string, UseTodo> = {
    effector: useTodoWithEffector,
    // mobx: useTodoWithMobx,
    // 'redux-toolkit': useTodoWithReduxToolkit,
};

export const useTodo = hooks[ACTIVE_STORE_MANAGER];

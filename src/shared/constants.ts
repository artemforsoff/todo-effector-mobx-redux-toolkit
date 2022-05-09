import { Nullable } from './utility-types';

export enum Filter {
    all = 'All',
    active = 'Active',
    completed = 'Completed',
}

export enum StateManager {
    effector = 'effector',
    mobx = 'mobx',
    reduxToolkit = 'redux-toolkit',
    recoil = 'recoil',
}

const searchParamsStateManager = new URLSearchParams(window.location.search).get(
    'ACTIVE_STATE_MANAGER'
) as Nullable<StateManager>;

export const ACTIVE_STATE_MANAGER: StateManager = searchParamsStateManager || StateManager.effector;

export const orange = '&#127818;';
export const apple = '&#127822;';

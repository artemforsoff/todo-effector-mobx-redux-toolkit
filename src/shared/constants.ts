import { Nullable } from './utility-types';

export enum Filter {
    all = 'All',
    active = 'Active',
    completed = 'Completed',
}

export enum StoreManager {
    effector = 'effector',
    mobx = 'mobx',
    reduxToolkit = 'redux-toolkit',
    recoil = 'recoil',
}

const searchParamsStoreManager = new URLSearchParams(window.location.search).get(
    'ACTIVE_STORE_MANAGER'
) as Nullable<StoreManager>;

export const ACTIVE_STORE_MANAGER: StoreManager = searchParamsStoreManager || StoreManager.effector;

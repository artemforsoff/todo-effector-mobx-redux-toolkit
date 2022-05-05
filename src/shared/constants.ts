import { Nullable } from './utility-types';

export enum StoreManager {
    effector = 'effector',
    mobx = 'mobx',
    reduxToolkit = 'redux-toolkit',
}

const searchParamsStoreManager = new URLSearchParams(window.location.search).get(
    'ACTIVE_STORE_MANAGER'
) as Nullable<StoreManager>;

export const ACTIVE_STORE_MANAGER: StoreManager = searchParamsStoreManager || StoreManager.reduxToolkit;

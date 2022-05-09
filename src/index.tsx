import './index.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from 'stores/redux-toolkit';
import { RecoilRoot } from 'recoil';
import { ACTIVE_STORE_MANAGER, StoreManager } from 'shared/constants';
import { DebugObserver } from 'stores/recoil/debug-observer';

const recoilIsUsed = ACTIVE_STORE_MANAGER === StoreManager.recoil;
const effectorIsUsed = ACTIVE_STORE_MANAGER === StoreManager.effector;

if (effectorIsUsed) {
    require('effector-logger/inspector');
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <RecoilRoot>
        <Provider store={store}>
            <BrowserRouter>
                {recoilIsUsed && <DebugObserver />}
                <App />
            </BrowserRouter>
        </Provider>
    </RecoilRoot>
);

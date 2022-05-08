import 'effector-logger/inspector';
import './index.scss';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from 'stores/redux-toolkit';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <RecoilRoot>
        <Provider store={store}>
            <HashRouter basename={process.env.REACT_APP_ROUTER_BASE_NAME}>
                <App />
            </HashRouter>
        </Provider>
    </RecoilRoot>
);

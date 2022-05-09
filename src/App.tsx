import { Route, Routes } from 'react-router-dom';
import { TodoPage } from 'pages/todo';
import { ExampleCounterPage, ExamplesOperatorsPage } from 'pages/examples';
import { IndexPage } from 'pages';
import { Fragment } from 'react';

export const App = () => (
    <Fragment>
        <Routes>
            <Route path="/">
                <Route index element={<IndexPage />} />
                <Route path="todo" element={<TodoPage />} />
                <Route path="examples">
                    <Route path="operators" element={<ExamplesOperatorsPage />} />
                    <Route path="counter" element={<ExampleCounterPage />} />
                </Route>
            </Route>
        </Routes>
    </Fragment>
);

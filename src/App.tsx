import { Route, Routes } from 'react-router-dom';
import { TodoPage } from 'pages/todo';
import { ExampleCounterPage, ExamplesOperatorsPage } from 'pages/examples';
import { IndexPage } from 'pages';

export const App = () => {
    return (
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
    );
};

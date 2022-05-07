import { TodoPage } from 'pages/todo';
import { ExamplesPage } from 'pages/examples';
import { IndexPage } from 'pages/index';
import { Route, Routes } from 'react-router-dom';

export const App = () => (
    <Routes>
        <Route path="/">
            <Route index element={<IndexPage />} />
            <Route path="todo" element={<TodoPage />} />
            <Route path="examples" element={<ExamplesPage />} />
        </Route>
    </Routes>
);

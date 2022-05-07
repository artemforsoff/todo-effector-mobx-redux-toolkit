import { TodoPage } from 'pages/todo';
import { ExamplesPage } from 'pages/examples';
import { Route, Routes } from 'react-router-dom';

export const App = () => (
    <Routes>
        <Route path="todo" element={<TodoPage />} />
        <Route path="examples" element={<ExamplesPage />} />
    </Routes>
);

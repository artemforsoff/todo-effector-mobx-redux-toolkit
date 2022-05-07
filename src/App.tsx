import { Link, Route, Routes } from 'react-router-dom';
import { TodoPage } from 'pages/todo';
import { ExampleCounterPage, ExamplesOperatorsPage } from 'pages/examples';

export const App = () => (
    <Routes>
        <Route path="/">
            <Route index element={<Link to="/todo">todo</Link>} />
            <Route path="todo" element={<TodoPage />} />
            <Route path="examples">
                <Route path="operators" element={<ExamplesOperatorsPage />} />
                <Route path="counter" element={<ExampleCounterPage />} />
            </Route>
        </Route>
    </Routes>
);

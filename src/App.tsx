import { Link, Route, Routes } from 'react-router-dom';
import { TodoPage } from 'pages/todo';
import { ExampleCounterPage, ExamplesOperatorsPage } from 'pages/examples';

export const App = () => (
    <>
        <Link to="/todo">todo</Link>
        <Routes>
            <Route path="todo" element={<TodoPage />} />
            <Route path="examples">
                <Route path="operators" element={<ExamplesOperatorsPage />} />
                <Route path="counter" element={<ExampleCounterPage />} />
            </Route>
        </Routes>
    </>
);

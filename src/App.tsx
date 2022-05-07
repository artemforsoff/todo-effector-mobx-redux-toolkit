import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { TodoPage } from 'pages/todo';
import { ExampleCounterPage, ExamplesOperatorsPage } from 'pages/examples';
import { useEffect } from 'react';

export const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Routes>
            <Route path="/">
                <Route
                    index
                    element={
                        <ul style={{ display: 'flex', gap: 20, padding: 20 }}>
                            <li>
                                <Link to="/todo">todo</Link>
                            </li>
                            <li>
                                <Link to="/examples/operators">example: operators</Link>
                            </li>
                            <li>
                                <Link to="/examples/counter">example: counter</Link>
                            </li>
                        </ul>
                    }
                />
                <Route path="todo" element={<TodoPage />} />
                <Route path="examples">
                    <Route path="operators" element={<ExamplesOperatorsPage />} />
                    <Route path="counter" element={<ExampleCounterPage />} />
                </Route>
            </Route>
        </Routes>
    );
};

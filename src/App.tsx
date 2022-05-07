import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { TodoPage } from 'pages/todo';
import { ExampleCounterPage, ExamplesOperatorsPage } from 'pages/examples';
import { useEffect } from 'react';

export const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate]);

    return (
        <Routes>
            <Route path="/">
                <Route
                    index
                    element={
                        <>
                            <Link to="/todo">todo</Link>
                            <Link to="/examples/operators">example: operators</Link>
                            <Link to="/examples/counter">example: counter</Link>
                        </>
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

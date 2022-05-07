import { Link } from 'react-router-dom';

export const IndexPage = () => (
    <>
        <Link to="./todo">Todo app</Link>
        <br />
        <Link to="./examples">Examples</Link>
    </>
);

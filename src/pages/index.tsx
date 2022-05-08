import { Link } from 'react-router-dom';
import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';

export const IndexPage = styled(({ className }: ComponentPropsWithClassName) => (
    <ul className={className}>
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
))`
    display: flex;
    gap: 20;
    padding: 20px;
`;

import { Link } from 'react-router-dom';
import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';

export const IndexPage = styled(({ className }: ComponentPropsWithClassName) => (
    <ul className={className}>
        <li>
            <Link to="/todo">todo</Link>
        </li>
        <li>
            <Link to="/examples/operators">example: effector's operators</Link>
        </li>
        <li>
            <Link to="/examples/counter">example: counter with effector</Link>
        </li>
    </ul>
))`
    padding: 20px;

    li:not(:last-child) {
        margin-block-end: 20px;
    }
`;

import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';

export const ExampleCounterPage = styled(({ className }: ComponentPropsWithClassName) => {
    return (
        <div className={className}>
            <button>-</button>
            <output>0</output>
            <button>+</button>
        </div>
    );
})`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    button {
        width: 30px;
        height: 30px;
    }
`;

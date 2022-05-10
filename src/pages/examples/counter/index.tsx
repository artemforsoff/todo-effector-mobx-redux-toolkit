import { useStore } from 'effector-react';
import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';
import { $count, decrement, getRandomNumberFx, increment } from './model';

export const ExampleCounterPage = styled(({ className }: ComponentPropsWithClassName) => {
    const isLoadingRandomNumber = useStore(getRandomNumberFx.pending);

    const count = useStore($count);

    return (
        <div className={className}>
            {isLoadingRandomNumber && <p>...loading random number</p>}

            <main>
                <button onClick={() => decrement()}>-</button>
                <output>{count}</output>
                <button onClick={() => increment()}>+</button>
            </main>

            <button onClick={() => getRandomNumberFx()}>fetch random number</button>
        </div>
    );
})`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    main {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    button {
        min-width: 30px;
        min-height: 30px;
        padding-inline: 5px;
    }
`;

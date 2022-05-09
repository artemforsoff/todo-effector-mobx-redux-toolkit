import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';

export const ExampleCounterPage = styled(({ className }: ComponentPropsWithClassName) => {
    const count = 0;
    const isLoadingRandomNumber = false;

    return (
        <div className={className}>
            {isLoadingRandomNumber && <p>...loading random number</p>}

            <main>
                <button>-</button>
                <output>{count}</output>
                <button>+</button>
            </main>

            <button>fetch random number</button>
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

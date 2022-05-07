import './model';
import { useStore } from 'effector-react';
import { Container } from 'shared/ui';
import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';
import { applesModel } from './model/apples';
import { orangesModel } from './model/oranges';

export const ExamplesPage = styled(({ className }: ComponentPropsWithClassName) => {
    const oranges = useStore(orangesModel.stores.$oranges);
    const apples = useStore(applesModel.stores.$apples);

    return (
        <div className={className}>
            <Container className="container" maxWidth="1440px">
                <section className="oranges">
                    <h2>Oranges</h2>

                    <div>
                        {oranges.map((orange, index) => (
                            <span key={index} dangerouslySetInnerHTML={{ __html: orange }} />
                        ))}
                    </div>

                    <div className="buttons">
                        <button onClick={() => orangesModel.events.addOranges()}>Add orange</button>
                        {/* <button onClick={() => orangesModel.events.addOrangeAsNowAmountApples()}>
                            Add orange as now amount apples
                        </button> */}
                        <button onClick={() => orangesModel.events.deleteOrange()}>Delete orange</button>
                        <button onClick={() => orangesModel.events.reset()}>Reset</button>
                    </div>
                </section>

                <section className="apples">
                    <h2>Apples</h2>

                    <div>
                        {apples.map((apple, index) => (
                            <span key={index} dangerouslySetInnerHTML={{ __html: apple }} />
                        ))}
                    </div>

                    <div className="buttons">
                        <button onClick={() => applesModel.events.addApple()}>Add apple</button>
                        <button onClick={() => applesModel.events.deleteApple()}>Delete apple</button>
                        <button onClick={() => applesModel.events.reset()}>Reset</button>
                        {/* <button onClick={() => applesModel.events.addAppleAndOrange()}>
                            Add apple and orange
                        </button> */}
                    </div>
                </section>
            </Container>
        </div>
    );
})`
    padding: 50px;
    background-color: #fffa65;
    min-height: 100vh;
    display: grid;

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 20px;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        border: 2px solid var(--dark-grey-color);

        .buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        button {
            border: 2px solid var(--dark-grey-color);
            border-radius: 5px;
            padding: 5px 10px;
            background-color: rgba(219, 221, 225, 0.5);
            font-weight: 500;
            transition: all 200ms linear;

            &:focus {
                box-shadow: 0 0 0 0.2em rgb(13 110 253 / 25%);
            }

            &:hover {
                background-color: var(--light-grey-color);
            }

            &:active {
                transform: scale(0.9);
            }
        }
    }
`;

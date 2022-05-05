import { TodoCreationForm, TodoList, TodoTitleLoader } from 'features';
import { Container } from 'shared/ui';
import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';

export const App = styled(({ className }: ComponentPropsWithClassName) => (
    <Container className={className}>
        <TodoTitleLoader />

        <TodoCreationForm />

        <TodoList />
    </Container>
))`
    display: grid;
    gap: 50px;
    position: relative;
    z-index: 1;
    padding-block-start: 100px;
`;

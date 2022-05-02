import { TodoCreationForm } from 'features/todo-creation-form';
import { TodoList } from 'features/todo-list';
import { Container } from 'shared/ui';
import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';

export const App = styled(({ className }: ComponentPropsWithClassName) => (
    <Container className={className}>
        <h1>Todo</h1>

        <TodoCreationForm className="todo-creation-form" />

        <TodoList />
    </Container>
))`
    position: relative;
    z-index: 1;
    padding-block-start: 100px;

    h1 {
        color: #fff;
        text-transform: uppercase;
        font-size: 60px;
        letter-spacing: 20px;
        margin-block-end: 50px;
    }

    .todo-creation-form {
        margin-block-end: 50px;
    }
`;

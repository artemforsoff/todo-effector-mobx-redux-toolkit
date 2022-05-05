import { TodoCreationForm, TodoList, TodoTitleLoader, TodoFilters } from 'features';
import { Container } from 'shared/ui';
import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';

export const App = styled(({ className }: ComponentPropsWithClassName) => (
    <Container className={className}>
        <TodoTitleLoader />

        <TodoCreationForm />

        <main>
            <TodoFilters className="todo-filters" />
            
            <TodoList className="todo-list" />
        </main>
    </Container>
))`
    display: grid;
    gap: 50px;
    position: relative;
    z-index: 1;
    padding-block: 100px;

    main {
        box-shadow: 0px 0px 26px 6px rgba(0, 0, 0, 0.1);

        .todo-filters {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-block-end: 2px solid var(--light-grey-color);
        }

        .todo-list {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }
`;

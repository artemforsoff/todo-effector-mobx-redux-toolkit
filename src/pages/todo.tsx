import classNames from 'classnames';
import { TodoCreationForm, TodoList, TodoTitleLoader, TodoFilters } from 'features';
import { Container } from 'shared/ui';
import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';

export const TodoPage = styled(({ className }: ComponentPropsWithClassName) => (
    <div className={classNames(className, 'todo-page')}>
        <Container className="container">
            <TodoTitleLoader />

            <TodoCreationForm />

            <main>
                <TodoFilters className="todo-filters" />

                <TodoList className="todo-list" />
            </main>
        </Container>
    </div>
))`
    .container {
        z-index: 1;
        position: relative;
        display: grid;
        padding-block: 100px;
        gap: 50px;

        @media screen and (max-width: 480px) {
            gap: 30px;
            padding-block: 50px;
        }
    }

    main {
        box-shadow: 0px 0px 26px 6px rgba(0, 0, 0, 0.1);
        border-radius: 10px;

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

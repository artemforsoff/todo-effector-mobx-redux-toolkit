import { observer } from 'mobx-react';
import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';
import { useTodoList } from '../hooks/useTodoList';
import { styles } from './styles';
import { Todo } from 'features';

export const TodoList = styled(
    observer(({ className }: ComponentPropsWithClassName) => {
        const { todos } = useTodoList();

        return (
            <div className={className}>
                {Boolean(todos.length) ? (
                    <ul>
                        {todos.map((todo) => (
                            <Todo key={todo.id} todo={todo} className="todo" />
                        ))}
                    </ul>
                ) : (
                    <p className="message-if-list-is-empty">Todo list is empty</p>
                )}
            </div>
        );
    })
)`
    ${styles}
`;

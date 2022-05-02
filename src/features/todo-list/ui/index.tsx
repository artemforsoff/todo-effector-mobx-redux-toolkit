import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';
import { useTodoList } from '../hooks/useTodoList';
import { styles } from './styles';

export const TodoList = styled(({ className }: ComponentPropsWithClassName) => {
    const { todos } = useTodoList();

    return (
        <div className={className}>
            {Boolean(todos.length) ? (
                <ul>
                    {todos.map(({ id, completed, title }) => (
                        <li key={id} className="todo">
                            <input type="checkbox" checked={completed} />

                            <input type="text" disabled value={title} />

                            <button>delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Todo list is empty</p>
            )}
        </div>
    );
})`
    ${styles}
`;

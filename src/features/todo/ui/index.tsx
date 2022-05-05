import { observer } from 'mobx-react';
import { Checkbox } from 'shared/ui';
import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';
import { useTodo } from '../hooks/useTodo';
import { styles } from './styles';

type TodoProps = ComponentPropsWithClassName & { todo: app.Todo };

export const Todo = styled(
    observer((props: TodoProps) => {
        const { todo, className } = props;

        const { handleChangeСompleted, handleDelete } = useTodo(todo);

        return (
            <li className={className}>
                <Checkbox checked={todo.completed} onChange={handleChangeСompleted} />

                <input type="text" disabled value={todo.title} />

                <button onClick={handleDelete}>delete</button>
            </li>
        );
    })
)`
    ${styles}
`;

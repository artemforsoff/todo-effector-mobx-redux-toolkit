import { observer } from 'mobx-react';
import { Checkbox, ClickOutside, Input } from 'shared/ui';
import { TrashIcon } from 'shared/ui/icons/trash';
import styled from 'styled-components';
import { useTodo } from '../hooks/useTodo';
import { styles } from './styles';
import { TodoProps } from './types';

export const Todo = styled(
    observer((props: TodoProps) => {
        const { todo, className } = props;

        const { form: f, isOpenForm, handleChangeСompleted, handleDelete, setIsOpenForm } = useTodo(todo);

        const closeForm = () => setIsOpenForm(false);

        const handleBlur = () => {
            f.setValue('title', todo.title);
            closeForm();
        };

        return (
            <li className={className}>
                <Checkbox
                    checked={todo.completed}
                    onChange={({ target: { checked } }) => handleChangeСompleted(checked)}
                />

                {isOpenForm ? (
                    <ClickOutside onClickOutside={handleBlur}>
                        <form onSubmit={f.handleSubmit} className="form-update-title">
                            <Input
                                {...f.register('title', { required: true })}
                                hasError={Boolean(f.formState.errors.title)}
                                onBlur={handleBlur}
                            />
                        </form>
                    </ClickOutside>
                ) : (
                    <p className="title" onDoubleClick={() => setIsOpenForm(true)}>
                        {todo.title}
                    </p>
                )}

                <button
                    onClick={handleDelete}
                    className="btn-delete-todo"
                    aria-label={`Delete todo with title ${todo.title}`}
                >
                    <TrashIcon aria-hidden="true" />
                </button>
            </li>
        );
    })
)`
    ${styles}
`;

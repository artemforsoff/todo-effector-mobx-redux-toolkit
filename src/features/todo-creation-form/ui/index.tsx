import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';
import { useTodoCreationForm } from '../hooks/useTodoCreationForm';
import { styles } from './styles';

export const TodoCreationForm = styled(({ className }: ComponentPropsWithClassName) => {
    const { form: f } = useTodoCreationForm();

    return (
        <form className={className} onSubmit={f.handleSubmit}>
            <input {...f.register('title', { required: true })} placeholder="Enter title" />
        </form>
    );
})`
    ${styles}
`;

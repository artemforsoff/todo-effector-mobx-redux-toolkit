import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';
import { useTodoCreationForm } from '../hooks/useTodoCreationForm';
import { styles } from './styles';

export const TodoCreationForm = styled(({ className }: ComponentPropsWithClassName) => {
    const {
        form: { register },
        handleSubmit,
    } = useTodoCreationForm();

    return (
        <form className={className} onSubmit={handleSubmit}>
            <input {...register('title', { required: true })} />
        </form>
    );
})`
    ${styles}
`;

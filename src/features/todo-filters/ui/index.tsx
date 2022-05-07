import { observer } from 'mobx-react';
import { Filter } from 'shared/constants';
import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';
import { useTodoFilters } from '../hooks/useTodoFilters';
import { styles } from './styles';

type TodoFiltersProps = ComponentPropsWithClassName;

export const TodoFilters = styled(
    observer((props: TodoFiltersProps) => {
        const { className } = props;

        const { form: f, clearAllCompleted } = useTodoFilters();

        return (
            <form className={className}>
                <fieldset className="filter-by-completed">
                    {Object.values(Filter).map((filter) => (
                        <div key={filter} className="filter-by-completed__radio">
                            <input
                                {...f.register('filter')}
                                type="radio"
                                value={filter}
                                className="visibility-hidden"
                                id={filter}
                            />
                            <label htmlFor={filter}>{filter}</label>
                        </div>
                    ))}
                </fieldset>

                <button type="button" className="btn-clear-completed" onClick={() => clearAllCompleted()}>
                    Clear completed
                </button>
            </form>
        );
    })
)`
    ${styles}
`;

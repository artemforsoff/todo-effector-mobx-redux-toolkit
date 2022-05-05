import { css } from 'styled-components';

export const styles = css`
    padding: 25px 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

    .filter-by-completed {
        border: none;
        display: flex;
        gap: 20px;

        &__radio {
            display: flex;

            &,
            * {
                cursor: pointer;
            }

            & input:checked + label {
                color: #54a0ff;
            }
        }
    }

    .filter-by-completed__radio label,
    .btn-clear-completed {
        transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
        border-radius: 2px;
        font-weight: 500;
    }

    .filter-by-completed__radio:hover label,
    .btn-clear-completed:hover {
        text-decoration: underline;
    }

    .filter-by-completed__radio input:focus-visible + label,
    .btn-clear-completed:focus-visible {
        box-shadow: 0 0 0 0.2em rgb(13 110 253 / 25%);
    }

    .btn-clear-completed {
        border: none;
        background-color: transparent;
        outline: none;

        &:hover,
        &:focus {
            color: var(--error-color);
        }
    }
`;

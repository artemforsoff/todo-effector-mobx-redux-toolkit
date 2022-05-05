import { css } from 'styled-components';
import { TodoProps } from './types';

export const styles = css<TodoProps>`
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
    gap: 20px;
    padding: 25px 20px;

    .form-update-title input {
        width: 100%;
    }

    .title {
        line-height: 32px;
        ${({ todo: { completed } }) =>
            completed &&
            css`
                text-decoration: line-through;
            `}
    }

    @keyframes shake {
        0% {
            transform: translate(1px, 1px) rotate(0deg);
        }
        10% {
            transform: translate(-1px, -2px) rotate(-1deg);
        }
        20% {
            transform: translate(-3px, 0px) rotate(1deg);
        }
        30% {
            transform: translate(3px, 2px) rotate(0deg);
        }
        40% {
            transform: translate(1px, -1px) rotate(1deg);
        }
        50% {
            transform: translate(-1px, 2px) rotate(-1deg);
        }
        60% {
            transform: translate(-3px, 1px) rotate(0deg);
        }
        70% {
            transform: translate(3px, 1px) rotate(-1deg);
        }
        80% {
            transform: translate(-1px, -1px) rotate(1deg);
        }
        90% {
            transform: translate(1px, 2px) rotate(0deg);
        }
        100% {
            transform: translate(1px, -2px) rotate(-1deg);
        }
    }

    .btn-delete-todo {
        display: flex;
        padding: 5px;
        margin: 0;
        background-color: transparent;
        border: none;
        outline: none;
        border-radius: 5px;
        transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);

        &:focus svg,
        &:hover svg {
            animation: shake 750ms;
            animation-iteration-count: infinite;
        }

        &:focus {
            box-shadow: 0 0 0 0.2em rgb(13 110 253 / 25%);
        }
    }
`;

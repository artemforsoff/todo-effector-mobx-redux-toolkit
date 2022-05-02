import { css } from 'styled-components';

export const styles = css`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 26px 6px rgba(0, 0, 0, 0.1);

    ul {
        list-style: none;
    }

    .todo {
        display: grid;
        grid-template-columns: min-content 1fr min-content;
        align-items: center;
        gap: 20px;
        padding: 25px 20px;

        &:not(:last-child) {
            border-block-end: 2px solid rgba(0, 0, 0, 0.1);
        }
    }
`;

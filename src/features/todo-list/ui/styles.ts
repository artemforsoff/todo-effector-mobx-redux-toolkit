import { css } from 'styled-components';

export const styles = css`
    background-color: #fff;

    ul {
        list-style: none;
    }

    .todo:not(:last-child) {
        border-block-end: 2px solid var(--light-grey-color);
    }

    .message-if-list-is-empty {
        padding: 25px 20px;
        font-size: 20px;
        line-height: 32px;
    }
`;

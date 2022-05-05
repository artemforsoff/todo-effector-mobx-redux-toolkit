import { css } from 'styled-components';

export const styles = css`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 26px 6px rgba(0, 0, 0, 0.1);

    ul {
        list-style: none;
    }

    .todo:not(:last-child) {
        border-block-end: 2px solid var(--light-grey-color);
    }

    p {
        padding: 20px;
        font-size: 20px;
    }
`;

import { css } from 'styled-components';

export const styles = css`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 26px 6px rgba(0, 0, 0, 0.1);

    input {
        border-radius: 10px;
        padding: 20px;
        width: 100%;
        outline: none;
        font-size: 24px;
        border: none;
        transition: all 200ms ease;

        &::placeholder {
            color: var(--light-grey-color);
        }

        &:focus {
            box-shadow: 0 0 0 0.2em rgba(255, 255, 255, 0.4);
        }
    }
`;

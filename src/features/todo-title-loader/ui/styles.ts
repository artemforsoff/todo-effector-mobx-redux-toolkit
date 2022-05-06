import { css } from 'styled-components';

export const styles = css`
    font-size: 60px;
    letter-spacing: 20px;
    color: #fff;
    display: flex;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
        font-size: 45px;
        letter-spacing: calc(45px / 3);
    }

    @keyframes blink {
        50% {
            color: transparent;
        }
    }

    .loader span {
        animation: 1s blink infinite;

        &:nth-child(2) {
            animation-delay: 250ms;
        }

        &:nth-child(3) {
            animation-delay: 500ms;
        }
    }
`;

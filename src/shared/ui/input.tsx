import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    hasError?: boolean;
};

const styles = css<InputProps>`
    border: 2px solid var(--light-grey-color);
    border-radius: 2px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
    padding: 5px 10px;
    outline: none;

    &:hover,
    &:focus {
        border-color: var(--dark-grey-color);
    }

    &:focus {
        box-shadow: 0 0 0 0.2em rgb(13 110 253 / 25%);
    }

    &::placeholder {
        color: var(--light-grey-color);
    }

    ${({ hasError }) =>
        hasError &&
        css`
            border-color: var(--error-color) !important;
        `}
`;

export const Input = styled(
    forwardRef<HTMLInputElement, InputProps>((props, ref) => {
        const { hasError: _, ...otherProps } = props;
        return <input {...otherProps} ref={ref} />;
    })
)`
    ${styles}
`;

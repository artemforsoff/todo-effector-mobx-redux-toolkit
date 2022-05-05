import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type CheckboxProps = React.PropsWithChildren<
    React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>;

const styles = css<CheckboxProps>`
    font-size: 20px;

    input + label {
        position: relative;
        display: flex;
        align-items: center;
        transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);

        & > span {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-inline-end: ${({ children }) => (children ? '1em' : 0)};
            width: 1em;
            height: 1em;
            background: transparent;
            border: 2px solid var(--light-grey-color);
            border-radius: 2px;
            cursor: pointer;
            transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
        }
    }

    label:hover > span,
    input:focus + label > span {
        border-color: var(--dark-grey-color);
    }

    input:focus + label > span {
        box-shadow: 0 0 0 0.2em rgb(13 110 253 / 25%);
    }

    input:checked + label > span {
        border: 0.5em solid #54a0ff;
        animation: shrink-bounce 100ms cubic-bezier(0.4, 0, 0.23, 1);
    }

    input:checked + label::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0.15em;
        border-right: 3px solid transparent;
        border-bottom: 3px solid transparent;
        transform: rotate(45deg);
        transform-origin: 0 100%;
        width: 0.3em;
        height: 0.6em;
        border-color: #fff;
        clip-path: polygon(0% 75%, 0% 75%, 0% 100%, 0% 100%);
        animation: checkbox-check 250ms ease-in-out 100ms forwards;
    }

    @keyframes shrink-bounce {
        0% {
            transform: scale(1);
        }
        33% {
            transform: scale(0.85);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes checkbox-check {
        0% {
            clip-path: polygon(0% 75%, 0% 75%, 0% 100%, 0% 100%);
        }
        50% {
            clip-path: polygon(0% 75%, 100% 75%, 100% 100%, 0% 100%);
        }
        100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
    }
`;

export const Checkbox = styled((props: CheckboxProps) => {
    const { className, children, ...otherProps } = props;
    const id = nanoid();

    return (
        <div className={className}>
            <input
                id={id}
                type="checkbox"
                {...otherProps}
                className={classNames('visibility-hidden', className)}
            />
            <label htmlFor={id}>
                <span></span>

                {children}
            </label>
        </div>
    );
})`
    ${styles}
`;

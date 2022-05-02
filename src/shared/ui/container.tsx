import React from 'react';
import styled from 'styled-components';
import { ComponentPropsWithClassName } from '../utility-types';

type ContainerProps = ComponentPropsWithClassName & {
    maxWidth?: string;
    htmlElement?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
};

export const Container = styled(({ className, htmlElement = 'div', children }: ContainerProps) => {
    return React.createElement(htmlElement, { className }, children);
})`
    max-width: calc(${(p) => p.maxWidth || '840px'});
    width: 100%;
    padding-inline-start: 20px;
    padding-inline-end: 20px;
    margin-inline-start: auto;
    margin-inline-end: auto;
`;

import { observer } from 'mobx-react';
import { useIsLoading } from 'shared/hooks/useIsLoading';
import { ComponentPropsWithClassName } from 'shared/utility-types';
import styled from 'styled-components';
import { styles } from './styles';

export const TodoTitleLoader = styled(
    observer(({ className }: ComponentPropsWithClassName) => {
        const isLoading = useIsLoading();

        return (
            <h1 className={className}>
                <span className="title">Todo</span>

                {isLoading && (
                    <div className="loader">
                        {Array(3)
                            .fill(null)
                            .map((_, index) => (
                                <span key={index}>.</span>
                            ))}
                    </div>
                )}
            </h1>
        );
    })
)`
    ${styles}
`;

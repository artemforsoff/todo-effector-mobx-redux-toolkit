import { PropsWithChildren, useEffect, useRef } from 'react';
import { ComponentPropsWithClassName } from 'shared/utility-types';

type ClickOutsideProps = ComponentPropsWithClassName & {
    onClickOutside: () => void;
};

export const ClickOutside = ({
    onClickOutside,
    children,
    className,
}: PropsWithChildren<ClickOutsideProps>) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current) {
                if (!ref.current.contains(event.target as HTMLDivElement)) {
                    onClickOutside();
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClickOutside]);

    return (
        <div className={className} ref={ref}>
            {children}
        </div>
    );
};

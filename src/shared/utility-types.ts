/**
 * @description Constructs a type with all properties of `Type` set to optional and properties by `Keys` leaves required
 */
export type PartialExcept<Type, Keys extends keyof Type> = Partial<Type> & Pick<Type, Keys>;

export type ComponentPropsWithClassName = {
    className?: string;
};

/**
 * @description Constructs a type with all properties of `Type` set to optional and properties by `Keys` leave required
 */
export type PartialExcept<Type, Keys extends keyof Type> = Partial<Type> &
  Pick<Type, Keys>;

export const COMPONENT_TYPE_ID_PROPERTY = '__componentTypeId';

export type TComponentIdentifier = number;

export type TComponentContent = {
  [COMPONENT_TYPE_ID_PROPERTY]: TComponentIdentifier
};

export type TComponentInstance<T> = T & TComponentContent;

export type TComponentPrototype<T> = T & {
  prototype: TComponentContent
};

export type TComponentSignature = new (...args: never[]) => unknown;

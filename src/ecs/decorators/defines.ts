export const COMPONENT_TYPE_ID_PROPERTY = '__componentTypeId'

export type Component = { [COMPONENT_TYPE_ID_PROPERTY]: number }
export type ComponentSignature = new (...args: any[]) => any
import { ItemAttributeValueType } from "./value-type";

/**
 * @class
 * @classdesc Атрибут (стат, стата) чего угодно.
 * @kind Атака у меча, защита у брони, значение какого-то эффека (сопротивление (резист) к написанию кода в ООП стиле)
 */
export class ItemAttributeValue {
  public constructor(public value: number, public readonly type: ItemAttributeValueType = ItemAttributeValueType.Number) { }
}
import { ComponentDecorator } from '@/ecs/decorators/component';
import type { ItemAttributeValueType } from '@/game/item/attribute/value-type';

type Attribute = {
  readonly min: number,
  readonly max: number,
  readonly type?: ItemAttributeValueType
};

type Attributes = ReadonlyArray<Attribute>;

@ComponentDecorator
export class Prototype {
  public constructor(public attributes: Attributes, public stack = 1) { }
}

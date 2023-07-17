import { ComponentDecorator } from '@/ecs/decorators/component';
import type { ItemAttributeValue } from '@/game/item/attribute/value';

@ComponentDecorator
export class Armour {
  public constructor(public defence: number, public attributes: ItemAttributeValue[] = []) { }
}

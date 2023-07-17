import { ComponentDecorator } from '@/ecs/decorators/component';
import type { ItemAttributeValue } from '@/game/item/attribute/value';

@ComponentDecorator
export class Weapon {
  public constructor(public attack: number, public attributes: ItemAttributeValue[] = []) { }
}

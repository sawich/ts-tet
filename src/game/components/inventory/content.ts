import { ComponentDecorator } from '@/ecs/decorators/component';
import type { Entity } from '@/ecs/entity';

@ComponentDecorator
export class Content {
  public constructor(public item: Entity, public count = 1) { }
}

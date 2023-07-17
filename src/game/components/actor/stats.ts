import { ComponentDecorator } from '@/ecs/decorators/component';

@ComponentDecorator
export class Stats {
  public constructor(public health: number = 100, public mana: number = 0) { }
}

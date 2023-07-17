import { ComponentDecorator } from '@/ecs/decorators/component';

@ComponentDecorator
export class Creature {
  public constructor(public readonly name: string) { }
}

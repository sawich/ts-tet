import { ComponentDecorator } from '@/ecs/decorators/component';

@ComponentDecorator
export class Enemy {
  public constructor(public readonly agroDistance: number) { }
}

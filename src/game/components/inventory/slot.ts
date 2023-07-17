import { ComponentDecorator } from '@/ecs/decorators/component';

@ComponentDecorator
export class Slot {
  public constructor(public isOpen: boolean = false) { }
}

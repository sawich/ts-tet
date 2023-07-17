import { ComponentDecorator } from '@/ecs/decorators/component';
import { BasicInventory } from './basic-inventory';
import type { Registry } from '@/ecs/registry';

@ComponentDecorator
export class SimpleBackpack extends BasicInventory {
  public constructor(registry: Registry, length: number = 3) {
    super(registry, length, true);
  }
}

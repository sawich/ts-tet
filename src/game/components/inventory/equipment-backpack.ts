import { Log } from '@/log';
import { ComponentDecorator } from '@/ecs/decorators/component';
import { BasicInventory } from './basic-inventory';

import type { Registry } from '@/ecs/registry';
import type { Entity } from '@/ecs/entity';

@ComponentDecorator
export class EquipmentBackpack extends BasicInventory {
  get weapon() {
    return this.get(0).item;
  }

  set weapon(entity: Entity) {
    if (this.put(entity, 0) === false) {
      Log.ECS.error('Cant equip weapon');
    }
  }

  public constructor(registry: Registry) {
    super(registry, 1, true);
  }
}

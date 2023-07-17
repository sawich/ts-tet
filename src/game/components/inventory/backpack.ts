import { Slot } from './slot';
import { Log } from '@/log';
import { BasicInventory } from './basic-inventory';
import { ComponentDecorator } from '@/ecs/decorators/component';

import type { Entity } from '@/ecs/entity';
import type { Registry } from '@/ecs/registry';

@ComponentDecorator
export class Backpack extends BasicInventory {
  public get values(): ReadonlyArray<Entity> {
    return this.slots;
  }

  public open(count: number) {
    const firstClosedSlot = this.slots.findIndex((e) => e.get(Slot).isOpen === false);

    if (firstClosedSlot === -1) {
      Log.GAME.warn('No closed slots found');
      return;
    }

    this.openSlots(firstClosedSlot + count);
  }

  public constructor(registry: Registry, length: number, openCount?: number) {
    super(registry, length);

    this.openSlots(openCount ?? 0);
  }

  private openSlots(length: number) {
    const max = Math.min(this.slots.length, length);

    for (let i = 0; i < max; ++i) {
      this.slots[i].get(Slot).isOpen = true;
    }
  }
}

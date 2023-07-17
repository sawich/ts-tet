import { Slot } from './slot';
import { Content } from './content';

import type { Entity } from '@/ecs/entity';
import type { Registry } from '@/ecs/registry';

export abstract class BasicInventory {
  private getFreeSlot(index: number | null) {
    if (index != null) {
      const slot = this.slots[index];
      const component = slot.get(Slot);
      return component.isOpen ? slot : null;
    }

    return this.slots.find((e) => !e.has(Content));
  }

  /**
   * @returns Только открытые слоты
   */
  public get view(): ReadonlyArray<Content> {
    return this.slots.filter((e) => e.get(Slot).isOpen).map((e) => e.get(Content));
  }

  public get(index: number): Readonly<Content> {
    return this.slots[index].get(Content);
  }

  public put(item: Entity, index: number | null = null): boolean {
    const slot = this.getFreeSlot(index);
    if (!slot) { return false; }

    slot.set(Content, item);
    return true;
  }

  public get values(): ReadonlyArray<Entity> {
    return this.slots;
  }

  protected constructor(registry: Registry, length: number, isOpen: boolean = false) {
    this.slots = Array.from({ length }).map(() => {
      const entity = registry.createEntity();
      entity.set(Slot, isOpen);

      return entity;
    });
  }

  protected slots;
}

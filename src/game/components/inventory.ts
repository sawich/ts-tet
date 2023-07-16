import { component } from "@/ecs/decorators/component";
import { Entity } from "../../ecs/entity";
import { Registry } from "../../ecs/registry";

export namespace InventoryComponents {
  @component
  class Slot {
    public constructor(public isOpen: boolean) { }
  }

  @component
  class Content {
    public constructor(public item: Entity, public count = 1, public stack = 1) { }
  }

  abstract class BasicInventory {
    private getFreeSlot(index?: number) {
      if (index) {
        const slot = this.slots[index];
        return slot.get<Slot>().isOpen ? slot : null;
      }

      return this.slots.find(e => !e.has<Content>());
    }

    /**
     * 
     * @param item 
     * @param index В какой слот положить
     * @param spread Разрешить положить часть предметов в другой слот, если они не поместились в указанный.
     * @returns Возвращает предмет который неудалось разместить в инвентаре. Если неудалось разместить часть предметов - возвращает только часть.
     */
    public put(item: Entity, index: number = -1, spread: boolean = false): Entity | null {
      const strictly = index != -1 && spread == false;

      const slot = this.getFreeSlot();
      if (!slot) {
        console.warn('Slot is busy');
        return null;
      }

      if (slot.has<Content>()) {
        const content = slot.get<Content>();
        if (content.item) {

        }

        // const prototype = content.item.get<ItemPrototypeComponent>()
      }

      return null;
    }

    public get values(): ReadonlyArray<Entity> {
      return this.slots;
    }

    protected constructor(registry: Registry, length: number) {
      this.slots = Array.from({ length }).map(_ => registry.createEntity())
    }

    protected slots
  }

  @component
  export class SimpleBackpack extends BasicInventory {
    public constructor(registry: Registry, length: number = 3) {
      super(registry, length);
    }
  }

  @component
  export class Backpack extends BasicInventory {
    public get values(): ReadonlyArray<Entity> {
      return this.slots;
    }

    public open(count: number) {
      const firstClosedSlot = this.slots.findIndex(e => e.get<Slot>().isOpen == false)

      if (firstClosedSlot == -1) {
        console.warn('No closed slots found');
        return;
      }

      for (let i = firstClosedSlot, max = Math.min(this.slots.length, firstClosedSlot + count); i < max; ++i) {
        this.slots[i].get<Slot>().isOpen = true
      }
    }

    public constructor(registry: Registry, length: number, openCount?: number) {
      super(registry, length);

      const max = Math.min(this.slots.length, openCount ?? 0);

      for (let i = 0; i < max; ++i) {
        this.slots[i].set(Slot, true)
      }

      for (let i = max; i < this.slots.length; ++i) {
        this.slots[i].set(Slot, false)
      }
    }
  }
}

import { Registry } from '@/ecs/registry';
import { useItemPrototype } from '@/game/item/item-prototype';
import { ItemValue } from '@/game/item/item-value';

export function createItem(registry: Registry, id: ItemValue) {
  const entity = registry.createEntity();

  const actvator = useItemPrototype(id);

  const item = actvator();
  entity.move(item);

  return entity;
}

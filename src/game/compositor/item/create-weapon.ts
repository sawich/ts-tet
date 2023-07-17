import { Registry } from '@/ecs/registry';
import { ItemValue } from '@/game/item/item-value';
import { createBattleItem } from './create-battle-item';
import { ItemComponents } from '@/game/components/item';

export function createWeapon(registry: Registry, id: ItemValue) {
  const item = createBattleItem(registry, id);

  item.set(ItemComponents.Weapon, 10);
  // Добавляем случайные атрибуты

  return item;
}

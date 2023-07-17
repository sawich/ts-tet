import { Registry } from '@/ecs/registry';
import { createItem } from './create-item';
import { ItemValue } from '@/game/item/item-value';

export function createBattleItem(registry: Registry, id: ItemValue) {
  const item = createItem(registry, id);

  // Изменяем качество (durability) оружия
  // Что-то добавляем\меняем у предмета созданно для боя
  // Это может быть доспех или оружие

  return item;
}

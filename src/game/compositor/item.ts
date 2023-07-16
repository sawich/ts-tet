import { Registry } from "@/ecs/registry";
import { useItemPrototype } from "@/game/item/item-prototype";
import { ItemValue } from "@/game/item/item-value";

export namespace ItemCompositor {
  export function createItem(registry: Registry, id: ItemValue) {
    const entity = registry.createEntity()

    const actvator = useItemPrototype(id);

    const item = actvator();
    entity.move(item);

    return entity;
  }

  function createBattleItem(registry: Registry, id: ItemValue) {
    const item = createItem(registry, id);

    // Изменяем качество (durability) оружия
    // Что-то добавляем\меняем у предмета созданно для боя
    // Это может быть доспех или оружие

    return item;
  }

  export function createWeapon(registry: Registry, id: ItemValue) {
    const item = createBattleItem(registry, id);

    // Добавляем случайные атрибуты

    return item;
  }
}
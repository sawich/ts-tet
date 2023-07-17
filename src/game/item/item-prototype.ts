import { ItemValue } from './item-value';
import { ItemComponents } from '../components/item';
import { Log } from '@/log';

const ITEM_PROTOTYPE = {
  [ItemValue.None]: () => new ItemComponents.Prototype([], 1),

  [ItemValue.Armor_棉花沼泽纬线]: () => new ItemComponents.Prototype([{ min: 1, max: 5 }], 1),
  [ItemValue.Armor_棉花沼泽]: () => new ItemComponents.Prototype([{ min: 30, max: 44 }], 1),

  [ItemValue.Weapon_棉花沼泽汪]: () => new ItemComponents.Prototype([{ min: 1, max: 3 }], 1),
  [ItemValue.Weapon_棉花沼泽纬]: () => new ItemComponents.Prototype([{ min: 7, max: 15 }], 1),
};

export function useItemPrototype<T extends ItemValue | number>(index: T) {
  if (index in ITEM_PROTOTYPE) {
    return ITEM_PROTOTYPE[index];
  }

  Log.GAME.warn(`Attempt to get unknown item ${index}`);
  return ITEM_PROTOTYPE[ItemValue.None];
}

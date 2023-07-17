import { Log } from '@/log';
import { Registry } from '../../ecs/registry';
import { ItemValue } from '../item/item-value';
import { ItemCompositor } from '../compositor/item';
import { ItemComponents } from '../components/item';
import { ActorComponents } from '../components/actor';
import { InventoryComponents } from '../components/inventory';

import type { Entity } from '@/ecs/entity';

export class DungeonZone {
  private readonly hero;

  private readonly enemy;

  public constructor(private readonly registry: Registry) {
    this.hero = this.createHero();
    this.enemy = this.createEnemy();
  }

  public battle() {
    const wannaFightWithMe = () => {
      if (DungeonZone.TakeDamage(this.hero, this.enemy)) {
        Log.ZONE.info(`${this.hero.get(ActorComponents.Creature).name} died`);
        Log.ZONE.info(`${this.enemy.get(ActorComponents.Creature).name} WIN`);
        return;
      }

      setTimeout(wannaFightWithMe, 150);
    };

    wannaFightWithMe();
  }

  private createHero() {
    const entity = this.registry.createEntity();
    entity.set(ActorComponents.Creature, 'Boris Britva');
    entity.set(InventoryComponents.Backpack, this.registry, 12, 6);
    entity.set(ActorComponents.Stats);

    const eqipment = entity.set(InventoryComponents.EquipmentBackpack, this.registry);
    eqipment.weapon = ItemCompositor.createWeapon(this.registry, ItemValue.Weapon_棉花沼泽汪);

    return entity;
  }

  private createEnemy() {
    const entity = this.registry.createEntity();
    entity.set(ActorComponents.Creature, 'Object-oriented programming');
    entity.set(InventoryComponents.SimpleBackpack, this.registry);
    entity.set(ActorComponents.Stats);

    const eqipment = entity.set(InventoryComponents.EquipmentBackpack, this.registry);
    eqipment.weapon = ItemCompositor.createWeapon(this.registry, ItemValue.Weapon_棉花沼泽纬);

    return entity;
  }

  private static TakeDamage(left: Entity, right: Entity): boolean {
    const equip = left.get(InventoryComponents.EquipmentBackpack);
    const stats = right.get(ActorComponents.Stats);

    const weapon = equip.weapon.get(ItemComponents.Weapon);
    stats.health -= weapon.attack;

    Log.ZONE.debug(`current health: ${stats.health}`);

    return stats.health <= 0;
  }
}

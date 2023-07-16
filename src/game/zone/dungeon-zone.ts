import { Registry } from "../../ecs/registry";
import { ActorComponents } from "../components/actor";
import { InventoryComponents } from "../components/inventory";
import { ItemCompositor } from "../compositor/item";
import { ItemValue } from "../item/item-value";

export class DungeonZone {
  private readonly hero;
  private readonly enemy;

  public constructor(private readonly registry: Registry) {
    this.hero = this.createHero();
    this.enemy = this.createEnemy();
  }

  private createHero() {
    const hero = this.registry.createEntity()
    hero.set(ActorComponents.Creature, 'Bboris Britva');

    const inventory = hero.set(InventoryComponents.Backpack, this.registry, 12, 6)
    inventory.put(ItemCompositor.createWeapon(this.registry, ItemValue.Weapon_棉花沼泽汪))

    return hero;
  }

  private createEnemy() {
    const enemy = this.registry.createEntity()
    enemy.set(ActorComponents.Creature, 'Object-oriented programming');

    const inventory = enemy.set(InventoryComponents.SimpleBackpack, this.registry);
    inventory.put(ItemCompositor.createWeapon(this.registry, ItemValue.Weapon_棉花沼泽纬))

    // здесь в инвентарь кладём какие-то шмотки которые потом дровнутся с моба
    // можно в рантайме после смерти делать, как угожно

    return enemy;
  }

  battle() {

    /**
     * Нужна консультация, я хз как делается бой)))
     * Не из-за ECS, а в целом
     */

    this.hero;
    this.enemy;
  }
}
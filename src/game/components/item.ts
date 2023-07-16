import { component } from "@/ecs/decorators/component";

import { ItemAttributeValue } from "../item/attribute/value";
import { ItemAttributeValueType } from "../item/attribute/value-type";

export namespace ItemComponents {
  @component
  export class Prototype {
    public constructor(public attributes: { readonly min: number, readonly max: number, readonly type?: ItemAttributeValueType }[], public stack = 1) { }
  }

  @component
  export class ArmourPrototype {
    public constructor(public readonly defence: { min: number, max: number }, public readonly attributes: ItemAttributeValue[] = []) { }
  }

  @component
  export class Armour {
    public constructor(public defence: number, public attributes: ItemAttributeValue[] = []) { }
  }

  @component
  export class Weapon {
    public constructor(public attack: number, public attributes: ItemAttributeValue[] = []) { }
  }
}
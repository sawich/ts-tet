import { component } from "../../ecs/decorators/component";

export namespace ActorComponents {
  @component
  export class Creature {
    public constructor(public readonly name: string) { }
  }

  @component
  export class Enemy {
    public constructor(public readonly agroDistance: number) { }
  }

  @component
  export class Stats {
    public constructor(public health: number, public mana: number) { }
  }
}

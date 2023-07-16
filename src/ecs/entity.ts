import { DebugEcs } from "@/debug/ecs";
import { Memory } from "./memory";
import { type Component, COMPONENT_TYPE_ID_PROPERTY, type ComponentSignature } from "./decorators/defines";

export class Entity {
  public constructor(public readonly id: number, private readonly memory: Memory) { }

  public move<T extends object>(component: T): T {
    return this._set(component as Component);
  }

  public set<T extends ComponentSignature>(type: T, ...params: ConstructorParameters<typeof type>): InstanceType<T> {
    const component = new type(...params);
    return this._set(component as Component);
  }

  public get<T extends ComponentSignature>(type: ComponentSignature): T {
    return {} as T
  }

  public hasNot<T extends object>(): boolean { return false; }
  public has<T extends object>(): boolean { return true; }

  private _set<T>(component: Component): T {
    DebugEcs.ensureObjectIsComponent(component);
    const id = component[COMPONENT_TYPE_ID_PROPERTY];

    this.memory.components[id].push(component);
    return component as T
  }
}
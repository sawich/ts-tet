import { Debug } from '@/debug';

import type { TComponentInstance, TComponentPrototype, TComponentSignature } from './decorators/defines';
import type { ComponentRegistry } from './component-registry';

export class Entity {
  public constructor(public readonly id: number, private readonly components: ComponentRegistry) {
    this.components.entityAdd();
  }

  public destroy() {
    this.components.entityRemove(this.id);
  }

  public move<T>(component: T): T {
    return this.internalSet(component as TComponentInstance<T>);
  }

  public set<T extends TComponentSignature>(
    ComponentConstructor: T,
    ...params: ConstructorParameters<typeof ComponentConstructor>
  ): InstanceType<T> {
    const component = new ComponentConstructor(...params) as TComponentInstance<InstanceType<T>>;
    return this.internalSet(component);
  }

  public get<T extends TComponentSignature>(ComponentConstructor: T): InstanceType<T> {
    /* eslint max-len: off */
    const component = this.components.componentGet(this.id, ComponentConstructor) as TComponentPrototype<InstanceType<T>>;
    return component;
  }

  public hasNot<T>(component: TComponentPrototype<T>): boolean {
    return !this.components.componetExists(this.id, component);
  }

  public has<T extends object>(component: T): boolean {
    return this.components.componetExists(this.id, component as TComponentPrototype<T>);
  }

  private internalSet<T>(component: TComponentInstance<T>): T {
    Debug.Ecs.ensureObjectIsComponent(component);

    return this.components.componentSet(this.id, component);
  }
}

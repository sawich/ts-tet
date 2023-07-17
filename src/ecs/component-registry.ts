import { Log } from '@/log';
import { COMPONENT_TYPE_ID_PROPERTY } from './decorators/defines';

import type { TComponentInstance, TComponentPrototype } from './decorators/defines';

export class ComponentRegistry {
  private values: Array<Array<TComponentInstance<unknown> | undefined>> = [];

  public entityAdd() {
    this.values.push([]);
  }

  public entityRemove(entity: number) {
    if (1 + entity === this.values.length) {
      this.values.pop();
      return;
    }

    const value = this.values.pop();
    if (value) {
      this.values[entity] = value;
    }
  }

  public componentSet<T>(entity: number, component: TComponentInstance<T>): T {
    const id = component[COMPONENT_TYPE_ID_PROPERTY];

    Log.ECS.debug(`set component [${component.constructor.name}] with id [${id}]`);

    this.values[entity][id] = component;
    return component;
  }

  public componetExists<T>(entity: number, component: TComponentPrototype<T>) {
    return this.values[entity][ComponentRegistry.idOf(component)] !== undefined;
  }

  public compoentRemove<T>(entity: number, component: TComponentPrototype<T>) {
    this.values[entity][ComponentRegistry.idOf(component)] = undefined;
  }

  public componentGet<T>(entity: number, component: TComponentPrototype<T>) {
    return this.values[entity][ComponentRegistry.idOf(component)] as T;
  }

  private static idOf<T>(component: TComponentPrototype<T>) {
    return component.prototype[COMPONENT_TYPE_ID_PROPERTY];
  }
}

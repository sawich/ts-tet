import { COMPONENT_TYPE_ID_PROPERTY } from "@/ecs/decorators/defines";

export namespace DebugEcs {
  export function ensureObjectIsComponent<T extends object>(component: T) {
    const isComponent = component.hasOwnProperty(COMPONENT_TYPE_ID_PROPERTY);
    console.assert(isComponent, `type ${component.constructor.name} is not a component`)
  }
}
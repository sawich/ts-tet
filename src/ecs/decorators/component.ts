import { Memory } from "../memory";
import { Statistics } from "../statistics";
import { COMPONENT_TYPE_ID_PROPERTY } from "./defines";

export function component<T extends { new(...args: any[]): {} }>(constructor: T) {
  console.log(`register component: ${constructor.name}`);

  const id = Memory.instance.components.push([]);

  return class extends constructor {
    [COMPONENT_TYPE_ID_PROPERTY] = id;
  };
}

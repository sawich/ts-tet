import { COMPONENT_TYPE_ID_PROPERTY } from '@/ecs/decorators/defines';
import { Log } from '@/log';

export function ensureObjectIsComponent<T extends object>(component: T) {
  const isComponent = Reflect.has(component, COMPONENT_TYPE_ID_PROPERTY);

  if (isComponent === false) {
    Log.ECS.fatal(`type ${component.constructor.name} is not a component`);
  }
}

import { Log } from '@/log';
import { Statistics } from '../statistics';
import { COMPONENT_TYPE_ID_PROPERTY } from './defines';

export function ComponentDecorator<T extends { new(...args: never[]): unknown }>(constructor: T) {
  const value = Statistics.RegisterComponent();

  Log.ECS.debug(`register component: ${constructor.name} with id [${value}]`);

  const key = COMPONENT_TYPE_ID_PROPERTY;
  Reflect.defineProperty(constructor.prototype, key, { enumerable: false, value });
}
